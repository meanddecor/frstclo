/**
 * Luxury Product Section JavaScript
 * Handles mobile gallery navigation and variant selection
 */

if (!customElements.get('product-form')) {
  class LuxuryProductForm extends HTMLElement {
    constructor() {
      super();
      this.form = this.querySelector('form');
      this.form?.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
      this.submitButton = this.querySelector('[type="submit"]');
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      if (this.submitButton.getAttribute('aria-disabled') === 'true') return;

      this.handleErrorMessage();
      this.submitButton.setAttribute('aria-disabled', true);
      this.submitButton.classList.add('loading');
      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];

      const formData = new FormData(this.form);
      if (this.cart) {
        formData.append('sections', this.cart.getSectionsToRender().map((section) => section.id));
        formData.append('sections_url', window.location.pathname);
        this.cart.setActiveElement(document.activeElement);
      }
      config.body = formData;

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);
            const soldOutMessage = this.submitButton.querySelector('.sold-out-message');
            if (!soldOutMessage) return;
            this.submitButton.setAttribute('aria-disabled', true);
            this.submitButton.querySelector('span').classList.add('hidden');
            soldOutMessage.classList.remove('hidden');
            this.error = true;
            return;
          } else if (!this.cart) {
            window.location = window.routes.cart_url;
            return;
          }

          this.error = false;
          const quickAddModal = this.closest('quick-add-modal');
          if (quickAddModal) {
            document.body.addEventListener('modalClosed', () => {
              setTimeout(() => { this.cart.renderContents(response) });
            }, { once: true });
            quickAddModal.hide(true);
          } else {
            this.cart.renderContents(response);
          }
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          this.submitButton.classList.remove('loading');
          if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
          if (!this.error) this.submitButton.removeAttribute('aria-disabled');
          this.querySelector('.loading-overlay__spinner').classList.add('hidden');
        });
    }

    handleErrorMessage(errorMessage = false) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      if (!this.errorMessageWrapper) return;
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  }

  customElements.define('product-form', LuxuryProductForm);
}

/**
 * Mobile Gallery Navigation
 */
class LuxuryProductGallery {
  constructor(sectionId) {
    this.sectionId = sectionId;
    this.gallery = document.querySelector(`#luxury-gallery-${sectionId}`);
    this.nav = document.querySelector(`#luxury-nav-${sectionId}`);
    
    if (!this.gallery || !this.nav) return;

    this.items = this.gallery.querySelectorAll('.product__item-img');
    this.prevArrow = document.querySelector(`#prev-arrow-${sectionId}`);
    this.nextArrow = document.querySelector(`#next-arrow-${sectionId}`);
    this.dotsContainer = document.querySelector(`#nav-dots-${sectionId}`);
    this.currentIndex = 0;

    this.init();
  }

  init() {
    this.createDots();
    this.bindEvents();
  }

  createDots() {
    this.items.forEach((item, index) => {
      const dot = document.createElement('div');
      dot.classList.add('nav-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        this.currentIndex = index;
        this.scrollToIndex(this.currentIndex);
        this.updateDots();
      });
      this.dotsContainer.appendChild(dot);
    });
  }

  updateDots() {
    const dots = this.dotsContainer.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  scrollToIndex(index) {
    if (window.innerWidth <= 1024) {
      this.items[index].scrollIntoView({ 
        behavior: 'smooth', 
        inline: 'start', 
        block: 'nearest' 
      });
    }
  }

  bindEvents() {
    // Arrow navigation
    this.prevArrow?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.scrollToIndex(this.currentIndex);
      this.updateDots();
    });

    this.nextArrow?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.scrollToIndex(this.currentIndex);
      this.updateDots();
    });

    // Track scroll position on mobile
    let scrollTimeout;
    this.gallery.addEventListener('scroll', () => {
      if (window.innerWidth <= 1024) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          const scrollLeft = this.gallery.scrollLeft;
          const itemWidth = this.items[0]?.offsetWidth || 0;
          if (itemWidth > 0) {
            this.currentIndex = Math.round(scrollLeft / itemWidth);
            this.updateDots();
          }
        }, 100);
      }
    });
  }
}

/**
 * Variant Selection Handler
 */
class LuxuryVariantSelector {
  constructor(sectionId) {
    this.sectionId = sectionId;
    this.section = document.querySelector(`#MainProductLuxury-${sectionId}`);
    if (!this.section) return;

    this.productForm = this.section.querySelector('product-form');
    this.optionButtons = this.section.querySelectorAll('.option-value');
    
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Handle button clicks
    this.optionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active from siblings
        const parent = button.parentElement;
        const siblings = parent.querySelectorAll('.option-value');
        siblings.forEach(btn => btn.classList.remove('active'));
        
        // Add active to clicked button
        button.classList.add('active');
        
        // Update variant
        this.updateVariant();
      });
    });
  }

  updateVariant() {
    // Get selected options
    const selectedOptions = [];
    const optionGroups = this.section.querySelectorAll('.option-values');
    
    optionGroups.forEach(group => {
      const activeButton = group.querySelector('.option-value.active');
      if (activeButton) {
        selectedOptions.push(activeButton.dataset.optionValue);
      }
    });

    // Find matching variant
    const variantsScript = this.section.querySelector(`#product-variants-${this.sectionId}`);
    if (!variantsScript) return;

    const variants = JSON.parse(variantsScript.textContent);
    const matchingVariant = variants.find(variant => {
      return variant.options.every((option, index) => option === selectedOptions[index]);
    });

    if (matchingVariant) {
      this.updateFormVariant(matchingVariant);
      this.updatePrice(matchingVariant);
      this.updateButton(matchingVariant);
      this.updateURL(matchingVariant);
    }
  }

  updateFormVariant(variant) {
    const form = this.section.querySelector('#AddToCartForm');
    const variantInput = form?.querySelector('input[name="id"]');
    if (variantInput) {
      variantInput.value = variant.id;
    }
  }

  updatePrice(variant) {
    const priceDisplay = this.section.querySelector('.product-price');
    if (priceDisplay) {
      const formattedPrice = this.formatMoney(variant.price);
      priceDisplay.textContent = formattedPrice;
    }
  }

  updateButton(variant) {
    const button = this.section.querySelector('.product-info__cart-btn');
    if (!button) return;

    if (variant.available) {
      button.disabled = false;
      button.removeAttribute('aria-disabled');
      button.textContent = 'Add to Cart';
    } else {
      button.disabled = true;
      button.setAttribute('aria-disabled', 'true');
      button.textContent = 'Sold Out';
    }
  }

  updateURL(variant) {
    if (!variant || !history.replaceState) return;
    const url = new URL(window.location.href);
    url.searchParams.set('variant', variant.id);
    window.history.replaceState({}, '', url.toString());
  }

  formatMoney(cents) {
    const amount = (cents / 100).toFixed(2);
    return `$${amount}`;
  }
}

/**
 * Initialize on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Find all luxury product sections
  const luxurySections = document.querySelectorAll('[id^="MainProductLuxury-"]');
  
  luxurySections.forEach(section => {
    const sectionId = section.id.replace('MainProductLuxury-', '');
    
    // Initialize gallery navigation
    new LuxuryProductGallery(sectionId);
    
    // Initialize variant selector
    new LuxuryVariantSelector(sectionId);
  });
});

/**
 * Fetch config helper
 */
function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
  };
}
