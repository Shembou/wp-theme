/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/blog-reference-section/view.js ***!
  \********************************************/
document.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash;
  if (hash === '#blog-reference-section') {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map