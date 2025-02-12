/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	TextareaControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import CustomButton from "../../../common/CustomButton";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		heading = "",
		paragraph = "",
		button = {
			url: "",
			text: "",
			svg: "",
			svg_alt: "",
		},
	} = attributes;

	const updateButtonAttributes = (key, value) => {
		const newButton = { ...button, [key]: value };
		setAttributes({ button: newButton });
	};

	const updateSvgAttributes = (media) => {
		const newButton = { ...button, svg: media.url, svg_alt: media.alt };
		setAttributes({ button: newButton });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Content Settings" initialOpen={true}>
					{/* Heading Field */}
					<TextControl
						label="Heading"
						value={heading || ""}
						onChange={(value) => setAttributes({ heading: value })}
					/>

					{/* Paragraph Field */}
					<TextareaControl
						label="Paragraph"
						value={paragraph || ""}
						onChange={(value) => setAttributes({ paragraph: value })}
					/>

					{/* Button URL Field */}
					<TextControl
						label="Button URL"
						value={button.url}
						onChange={(value) => updateButtonAttributes("url", value)}
					/>

					{/* Button Text Field */}
					<TextControl
						label="Button Text"
						value={button.text}
						onChange={(value) => updateButtonAttributes("text", value)}
					/>

					{/* Button SVG Field */}
					<MediaUpload
						onSelect={(media) => updateSvgAttributes(media)}
						allowedTypes={["image"]}
						render={({ open }) => (
							<div>
								<Button onClick={open} variant="secondary">
									{button.svg
										? __("Replace svg", "cta-with-bg")
										: __("Upload svg", "cta-with-bg")}
								</Button>
								{button.svg && (
									<div
										style={{
											marginTop: "10px",
											alignItems: "center",
											display: "flex",
										}}
									>
										<img
											src={button.svg}
											alt={__("Card Icon", "cta-with-bg")}
											style={{
												maxWidth: "100%",
												border: "1px",
												padding: "10px",
											}}
										/>
										<Button
											onClick={() => updateButtonAttributes("svg", "")}
											variant="link"
											isDestructive
										>
											{__("Remove Icon", "cta-with-bg")}
										</Button>
									</div>
								)}
							</div>
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="cta-with-bg">
				<div className="section-wrapper">
					<header>
						<h2>{heading}</h2>
						<p>{paragraph}</p>
					</header>
					<ButtonIcon />
					<CustomButton {...button}>
						<>
							<img src={button.svg} alt={button.svg_alt} />
							{button.text}
						</>
					</CustomButton>
				</div>
			</section>
		</>
	);
}

const ButtonIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="289"
		height="153"
		fill="none"
		viewBox="0 0 289 153"
		className="lotus-icon"
	>
		<path
			fill="#082834"
			d="M285.804 107.629a18.63 18.63 0 0 0-11.416-8.79 88.2 88.2 0 0 0-26.587-2.662c4.797-23.805 1.199-42.633-2.471-53.797a19.367 19.367 0 0 0-22.533-13.048 102.6 102.6 0 0 0-34.238 14.535 113.4 113.4 0 0 0-32.51-39.874 19.25 19.25 0 0 0-23.097 0 113.3 113.3 0 0 0-32.511 39.874 102.6 102.6 0 0 0-34.238-14.535A19.367 19.367 0 0 0 43.67 42.38c-3.598 11.164-7.196 29.98-2.47 53.797a88.2 88.2 0 0 0-26.587 2.662 18.63 18.63 0 0 0-11.417 8.79 19.19 19.19 0 0 0-1.919 14.714c4.066 15.075 16.55 43.748 54.361 66.341 37.811 22.594 71.03 22.522 88.922 22.522s51.171 0 88.742-22.522c37.812-22.593 50.296-51.266 54.361-66.341a19.2 19.2 0 0 0-1.859-14.714M61.922 48.279a.24.24 0 0 1 .276-.18A84.5 84.5 0 0 1 93.15 62.096a142.3 142.3 0 0 0-6.212 42.584c0 22.473 4.52 40.773 10.924 55.5a148.2 148.2 0 0 1-23.432-30.52c-21.61-37.632-17.113-67.157-12.508-81.38m3.598 123.94c-31.984-19.092-42.357-42.5-45.739-54.912a71.7 71.7 0 0 1 26.983-1.403 155 155 0 0 0 10.973 23.276 170.6 170.6 0 0 0 40.773 47.442 137.8 137.8 0 0 1-33.038-14.403zm78.98 17.88c-11.189-8.322-38.375-33.854-38.375-85.42 0-50.93 26.839-76.666 38.375-85.348 11.537 8.706 38.375 34.441 38.375 85.372 0 51.542-27.186 77.074-38.375 85.396m51.351-128.004a84.5 84.5 0 0 1 30.952-13.983.24.24 0 0 1 .275.18c4.605 14.21 9.102 43.735-12.508 81.367a147.9 147.9 0 0 1-23.432 30.556c6.404-14.703 10.925-33.027 10.925-55.5a142.3 142.3 0 0 0-6.212-42.62m73.368 55.236c-3.322 12.292-13.671 35.748-45.678 54.888a137.9 137.9 0 0 1-33.039 14.391 170.6 170.6 0 0 0 40.774-47.442 155 155 0 0 0 10.972-23.276c9-1.24 18.153-.756 26.971 1.427z"
			opacity="0.5"
		></path>
	</svg>
);
