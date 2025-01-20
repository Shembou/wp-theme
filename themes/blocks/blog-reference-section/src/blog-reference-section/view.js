document.addEventListener('DOMContentLoaded', function () {
    const hash = window.location.hash;
    if (hash === '#blog-reference-section') {
        const target = document.querySelector(hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});