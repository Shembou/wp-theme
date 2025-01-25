document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener to the "Copy" button
    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const textToCopy = button.previousElementSibling.textContent;
            navigator.clipboard.writeText(textToCopy);
        });
    });
});
