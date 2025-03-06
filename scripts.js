 



//Copy protection script//
  document.addEventListener('DOMContentLoaded', function() {
      // Disable right-click
      document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
      });

      // Disable keyboard shortcuts
      document.addEventListener('keydown', function(e) {
          if (
              // Disable Ctrl+C, Ctrl+X, Ctrl+U
              (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 88 || e.keyCode === 85)) ||
              // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
              (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
              // Disable F12
              e.keyCode === 123
          ) {
              e.preventDefault();
              return false;
          }
      });

      // Disable drag and drop
      document.addEventListener('dragstart', function(e) {
          e.preventDefault();
      });

      // Disable text selection via double click
      document.addEventListener('mousedown', function(e) {
          if (e.detail > 1) {
              e.preventDefault();
          }
      });
  });



 /* Add JavaScript for table scroll detection */
document.addEventListener('DOMContentLoaded', function() {
    const tableWrappers = document.querySelectorAll('.table-responsive-wrapper');
    
    tableWrappers.forEach(wrapper => {
        const table = wrapper.querySelector('table');
        
        if (table.scrollWidth > wrapper.clientWidth) {
            wrapper.classList.add('scrollable');
        }

        // Check for horizontal scroll
        wrapper.addEventListener('scroll', function() {
            if (this.scrollLeft > 0) {
                this.classList.add('is-scrolling');
            } else {
                this.classList.remove('is-scrolling');
            }
        });
    });

    // Touch device detection
    function addTouchClass() {
        if ('ontouchstart' in window) {
            document.documentElement.classList.add('touch-device');
        }
    }
    addTouchClass();

    // Responsive image handling
    function handleResponsiveImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
        });
    }
    handleResponsiveImages();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
