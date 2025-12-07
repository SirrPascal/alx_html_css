document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-icon');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Optional: Toggle icon between hamburger and close if we had a close icon class
            // For now, simpler implementation as per prompt requirements
        });
    }
});
