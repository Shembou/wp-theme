document.addEventListener('DOMContentLoaded', () => {
    const employeeSection = document.querySelector('#detailed-employees-section');
    if (!employeeSection) return;

    const tooltipWrapper = employeeSection.querySelector('.tooltip-wrapper');
    const tooltipContents = tooltipWrapper.querySelector('.tooltip p');
    const loadMoreButton = tooltipWrapper.querySelector('.load-more');
    const progressBar = tooltipWrapper.querySelector('.progress-bar-wrapper div');

    const employees = Array.from(employeeSection.querySelectorAll('.employee-wrapper'));
    let currentLimit = parseInt(tooltipContents.innerHTML.match(/^(.*)\s*\/\s*/)[1].trim());
    const totalLimit = parseInt(tooltipContents.innerHTML.match(/\/\s*(.*)/)[1].trim());

    const updateUI = () => {
        // Show employees up to the current limit
        employees.forEach((employee, index) => {
            if (index < currentLimit) {
                employee.style.display = ''; // Make visible
            } else {
                employee.style.display = 'none'; // Hide if out of range
            }
        });

        // Update progress bar and tooltip text
        if (progressBar) {
            const percentage = (currentLimit / totalLimit) * 100;
            progressBar.style.width = `${percentage}%`;
        }

        if (tooltipContents) {
            tooltipContents.innerHTML = `${currentLimit} / ${totalLimit}`;
        }

        // Hide tooltip section when all employees are visible
        if (currentLimit >= totalLimit) {
            tooltipWrapper.style.display = 'none';
        }
    };

    // Event listener for "Load More" button
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            currentLimit = Math.min(currentLimit + 5, totalLimit); // Increase current limit
            updateUI();
        });
    }

    // Initial UI update
    updateUI();
});
