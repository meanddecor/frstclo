// Premium Interactive Environment JavaScript
(document => {
  // Initialize interactive environment
  const initInteractiveEnvironment = () => {
    const containers = document.querySelectorAll('[data-section-type="interactive-drake"]');
    
    containers.forEach(container => {
      const points = container.querySelectorAll('.interactive-point');
      const environment = container.querySelector('.environment-container');
      
      // Enhanced hover effects for navigation points
      points.forEach(point => {
        // Mouse enter
        point.addEventListener('mouseenter', () => {
          point.style.maxWidth = '300px';
        });
        
        // Mouse leave
        point.addEventListener('mouseleave', () => {
          point.style.maxWidth = '40px';
        });
        
        // Touch device support
        point.addEventListener('touchstart', () => {
          points.forEach(p => p.style.maxWidth = '40px');
          point.style.maxWidth = point.style.maxWidth === '300px' ? '40px' : '300px';
        });
      });
      
      // Horizontal scrolling with momentum
      if (environment) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        environment.addEventListener('mousedown', (e) => {
          isDown = true;
          startX = e.pageX - environment.offsetLeft;
          scrollLeft = environment.scrollLeft;
        });
        
        environment.addEventListener('mouseleave', () => {
          isDown = false;
        });
        
        environment.addEventListener('mouseup', () => {
          isDown = false;
        });
        
        environment.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - environment.offsetLeft;
          const walk = (x - startX) * 2;
          environment.scrollLeft = scrollLeft - walk;
        });
        
        // Touch support
        environment.addEventListener('touchstart', (e) => {
          isDown = true;
          startX = e.touches[0].pageX - environment.offsetLeft;
          scrollLeft = environment.scrollLeft;
        }, { passive: true });
        
        environment.addEventListener('touchend', () => {
          isDown = false;
        }, { passive: true });
        
        environment.addEventListener('touchmove', (e) => {
          if(!isDown) return;
          const x = e.touches[0].pageX - environment.offsetLeft;
          const walk = (x - startX) * 2;
          environment.scrollLeft = scrollLeft - walk;
        }, { passive: true });
      }
    });
  };
  
  // Initialize when DOM is ready
  if (document.readyState !== 'loading') {
    initInteractiveEnvironment();
  } else {
    document.addEventListener('DOMContentLoaded', initInteractiveEnvironment);
  }
  
  // Handle Shopify theme editor changes
  if (typeof Shopify !== 'undefined') {
    Shopify.designMode = Shopify.designMode || {};
    Shopify.designMode.on('shopify:section:load', initInteractiveEnvironment);
    Shopify.designMode.on('shopify:section:unload', initInteractiveEnvironment);
  }
})(document);
