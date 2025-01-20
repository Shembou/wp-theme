document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links with hashes (e.g., <a href="#section">)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default anchor behavior
            e.preventDefault();

            // Get the target element by its ID
            const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});