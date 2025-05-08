document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const hamburgerButton = document.getElementById('hamburgerMenu');
    const mainNav = document.getElementById('mainNav');

    // Check if both elements exist before adding event listener
    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', () => {
            // Toggle the 'is-active' class on the hamburger button (for X animation)
            hamburgerButton.classList.toggle('is-active');

            // Toggle the 'mobile-nav-open' class on the main navigation panel
            mainNav.classList.toggle('mobile-nav-open');

            // Update aria-expanded attribute for accessibility
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
            hamburgerButton.setAttribute('aria-expanded', !isExpanded);
        });
    } else {
        if (!hamburgerButton) {
            console.error('Hamburger button (#hamburgerMenu) not found.');
        }
        if (!mainNav) {
            console.error('Main navigation panel (#mainNav) not found.');
        }
    }
});