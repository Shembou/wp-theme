document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links with hashes (e.g., <a href="#section">)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const toc = document.querySelector('.table-of-contents');
    const section = document.querySelector('#privacy-policy-section');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default anchor behavior
            e.preventDefault();

            // Get the target element by its ID
            const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Adjust for fixed header (optional: set your header height here)
                const headerOffset = document.querySelector('.fixed-header')?.offsetHeight || 50;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                // Smooth scroll to the adjusted position
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    if (toc && section) {
        const updatePosition = () => {
            const sectionRect = section.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (window.innerWidth >= 999) {  // Only apply on desktop
                if (sectionRect.top <= 40) {
                    toc.style.position = 'fixed';
                    toc.style.top = '40px';
                    toc.style.width = '300px';
                    toc.style.left = `${sectionRect.left}px`; // Add this to maintain horizontal position
                } else {
                    toc.style.position = 'relative';
                    toc.style.top = '0';
                    toc.style.left = '0';
                    toc.style.width = '300px';
                }
            } else {
                // Reset styles on mobile
                toc.style.position = 'relative';
                toc.style.top = '0';
                toc.style.left = '0';
                toc.style.width = `calc(100% - 64px)`;
            }
        };

        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);
        updatePosition(); // Call once on load
    }
});
