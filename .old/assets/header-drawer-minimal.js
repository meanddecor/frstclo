class HeaderDrawerMinimal extends HTMLElement {
  constructor() {
    super();
    this.toggle = this.querySelector('.header-drawer-minimal__toggle');
    this.menuContainer = this.querySelector('.header-drawer-minimal__menu-container');
    this.overlay = this.querySelector('.header-drawer-minimal__overlay');
    this.submenuToggles = this.querySelectorAll('.header-drawer-minimal__submenu-toggle');
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    // Toggle menu on click
    if (this.toggle) {
      this.toggle.addEventListener('click', this.toggleMenu.bind(this));
    }
    
    // Close menu when clicking overlay
    if (this.overlay) {
      this.overlay.addEventListener('click', this.closeMenu.bind(this));
    }
    
    // Handle submenu toggles
    this.submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleSubmenu(toggle);
      });
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
    
    // Prevent body scroll when menu is open
    this.menuContainer.addEventListener('touchmove', (e) => {
      e.stopPropagation();
    }, { passive: true });
  }
  
  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }
  
  openMenu() {
    this.isOpen = true;
    this.toggle.classList.add('header-drawer-minimal__toggle--active');
    this.menuContainer.classList.add('header-drawer-minimal__menu-container--active');
    this.overlay.classList.add('header-drawer-minimal__overlay--active');
    document.body.style.overflow = 'hidden';
    
    // Set focus to first menu item for accessibility
    setTimeout(() => {
      const firstLink = this.menuContainer.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }, 400);
    
    // Dispatch custom event
    this.dispatchEvent(new CustomEvent('drawer-opened', {
      bubbles: true,
      detail: { drawer: this }
    }));
  }
  
  closeMenu() {
    this.isOpen = false;
    this.toggle.classList.remove('header-drawer-minimal__toggle--active');
    this.menuContainer.classList.remove('header-drawer-minimal__menu-container--active');
    this.overlay.classList.remove('header-drawer-minimal__overlay--active');
    document.body.style.overflow = '';
    
    // Return focus to toggle button
    this.toggle.focus();
    
    // Dispatch custom event
    this.dispatchEvent(new CustomEvent('drawer-closed', {
      bubbles: true,
      detail: { drawer: this }
    }));
  }
  
  toggleSubmenu(toggle) {
    const parentItem = toggle.closest('.header-drawer-minimal__menu-item');
    const submenu = parentItem.querySelector('.header-drawer-minimal__submenu');
    
    if (!submenu) return;
    
    const isActive = submenu.classList.contains('header-drawer-minimal__submenu--active');
    
    // Close all other submenus
    this.querySelectorAll('.header-drawer-minimal__submenu--active').forEach(item => {
      if (item !== submenu) {
        item.classList.remove('header-drawer-minimal__submenu--active');
        const otherToggle = item.parentElement.querySelector('.header-drawer-minimal__submenu-toggle');
        if (otherToggle) {
          otherToggle.classList.remove('header-drawer-minimal__submenu-toggle--active');
        }
      }
    });
    
    // Toggle current submenu
    if (isActive) {
      submenu.classList.remove('header-drawer-minimal__submenu--active');
      toggle.classList.remove('header-drawer-minimal__submenu-toggle--active');
    } else {
      submenu.classList.add('header-drawer-minimal__submenu--active');
      toggle.classList.add('header-drawer-minimal__submenu-toggle--active');
    }
  }
  
  // Public method to programmatically open the drawer
  open() {
    if (!this.isOpen) {
      this.openMenu();
    }
  }
  
  // Public method to programmatically close the drawer
  close() {
    if (this.isOpen) {
      this.closeMenu();
    }
  }
}

// Register the custom element
customElements.define('header-drawer-minimal', HeaderDrawerMinimal);

// Handle smooth scrolling when clicking menu links
document.addEventListener('DOMContentLoaded', () => {
  const drawerMinimal = document.querySelector('header-drawer-minimal');
  
  if (drawerMinimal) {
    const menuLinks = drawerMinimal.querySelectorAll('.header-drawer-minimal__menu-item a:not([href*="#"])');
    
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Close drawer when navigating to a new page
        setTimeout(() => {
          if (drawerMinimal.isOpen) {
            drawerMinimal.close();
          }
        }, 100);
      });
    });
    
    // Handle anchor links (same page navigation)
    const anchorLinks = drawerMinimal.querySelectorAll('.header-drawer-minimal__menu-item a[href*="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const targetId = href.split('#')[1];
        
        if (targetId && document.getElementById(targetId)) {
          e.preventDefault();
          drawerMinimal.close();
          
          setTimeout(() => {
            const target = document.getElementById(targetId);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 400);
        }
      });
    });
  }
});
