document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links with hashes (e.g., <a href="#section">)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const section = document.querySelector('#blog-template');
    if (!section) {
        return;
    }
    const toc = section.querySelector('.table-of-contents');

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

    if (section && toc) {
        const updatePosition = () => {
            const sectionRect = section.getBoundingClientRect();
            const tocHeight = toc.offsetHeight;

            const selectedCategories = section.querySelector('.selected-categories');

            if (!selectedCategories) {
                return;
            }
            const selectedCategoriesOffset = selectedCategories.offsetTop + selectedCategories.offsetHeight + 40;
            const sectionHeight = section.offsetHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (window.innerWidth >= 999) {  // Only apply on desktop
                // Calculate the point where TOC should stop being fixed
                const bottomLimit = sectionRect.bottom - tocHeight - 40; // 40 is the top offset

                if (sectionRect.top <= -(selectedCategoriesOffset) && bottomLimit > 0) {
                    console.log(selectedCategoriesOffset)
                    console.log(sectionRect.top)
                    toc.style.position = 'fixed';
                    toc.style.top = '40px';
                    toc.style.width = '300px';
                    toc.style.left = `${sectionRect.left}px`;
                } else if (bottomLimit <= 0) {
                    // When we reach the bottom of the section, switch to absolute positioning
                    toc.style.position = 'absolute';
                    toc.style.top = `${sectionHeight - tocHeight}px`;
                    toc.style.left = '0';
                    toc.style.width = '300px';
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