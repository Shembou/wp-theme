document.addEventListener("DOMContentLoaded", () => {
	// Add click event listener to the "Copy" button
	const copyButtons = document.querySelectorAll(".copy-button");

	copyButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const textToCopy = button.previousElementSibling.textContent;
			navigator.clipboard.writeText(textToCopy);
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	let submitButton = document.querySelector(".wpcf7-submit");
	if (submitButton) {
		let customButton = document.createElement("button");
		customButton.type = "submit";
		customButton.innerHTML = submitButton.value;
		customButton.className = "custom-button";

		submitButton.parentNode.replaceChild(customButton, submitButton);
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const formWrapper = document.querySelector(".contact-form-wrapper");
	const form = formWrapper.querySelector("form");

	if (form) {
		form.addEventListener("submit", function (event) {
			// Add the loading class to trigger the blur and overlay
			formWrapper.classList.add("loading");
		});

		// Listen for Contact Form 7 events
		document.addEventListener(
			"wpcf7mailsent",
			function (event) {
				// Remove the loading class when submission is successful
				formWrapper.classList.remove("loading");
			},
			false,
		);

		document.addEventListener(
			"wpcf7mailfailed",
			function (event) {
				// Remove the loading class if submission fails
				formWrapper.classList.remove("loading");
			},
			false,
		);
		document.addEventListener(
			"wpcf7invalid",
			function (event) {
				// Remove the loading class if there are validation errors
				formWrapper.classList.remove("loading");
			},
			false,
		);
	}
});
