// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.nav__menu-toggle');
    const menu = document.querySelector('.nav__menu');
    const overlay = document.querySelector('.nav__overlay');
    const menuIcon = document.querySelector('.nav__menu-icon');
    
    function toggleMenu() {
        const isOpen = menu.classList.contains('is-open');
        
        if (isOpen) {
            // Close menu
            menu.classList.remove('is-open');
            overlay.classList.remove('is-open');
            menuToggle.classList.remove('is-open');
            menuIcon.src = './assets/images/icon-menu.svg';
            menuIcon.alt = 'Open menu';
            document.body.style.overflow = '';
        } else {
            // Open menu
            menu.classList.add('is-open');
            overlay.classList.add('is-open');
            menuToggle.classList.add('is-open');
            menuIcon.src = './assets/images/icon-menu-close.svg';
            menuIcon.alt = 'Close menu';
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) {
            toggleMenu();
        }
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024 && menu.classList.contains('is-open')) {
            menu.classList.remove('is-open');
            overlay.classList.remove('is-open');
            menuToggle.classList.remove('is-open');
            menuIcon.src = './assets/images/icon-menu.svg';
            menuIcon.alt = 'Open menu';
            document.body.style.overflow = '';
        }
    });
});