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
	InspectorControls,
	useBlockProps,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
	Button,
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
		image = "",
		image_alt = "",
		button = {
			url: "",
			text: "",
			svg: "",
		},
	} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<PanelRow>
						<TextControl
							label={__("Heading", "simple-hero-section")}
							value={heading || ""}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextareaControl
							label={__("Paragraph", "simple-hero-section")}
							value={paragraph || ""}
							onChange={(value) => setAttributes({ paragraph: value })}
						/>
					</PanelRow>
					<PanelRow>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({ image: media.url });
								setAttributes({ image_alt: media.alt });
							}}
							allowedTypes={["image"]}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{image
											? __("Replace Image", "simple-hero-section")
											: __("Upload Image", "simple-hero-section")}
									</Button>
									{image && (
										<div
											style={{
												marginTop: "10px",
												alignItems: "center",
												display: "grid",
											}}
										>
											<img
												src={image}
												alt={__("Image", "simple-hero-section")}
												style={{
													maxWidth: "100%",
													border: "1px",
													padding: "10px",
												}}
											/>
											<Button
												onSelect={(media) => onChangeButton("svg", "")}
												variant="link"
												isDestructive
											>
												{__("Remove Image", "simple-hero-section")}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Button Url", "simple-hero-section")}
							value={button.url || ""}
							onChange={(value) =>
								setAttributes({
									...attributes,
									button: {
										...attributes.button,
										url: value,
									},
								})
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Button text", "simple-hero-section")}
							value={button.text || ""}
							onChange={(value) =>
								setAttributes({
									...attributes,
									button: {
										...attributes.button,
										text: value,
									},
								})
							}
						/>
					</PanelRow>
					<PanelRow>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									...attributes,
									button: {
										...attributes.button,
										svg: media.url,
									},
								})
							}
							allowedTypes={["image"]}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{button.svg
											? __("Replace Svg", "simple-hero-section")
											: __("Upload Svg", "simple-hero-section")}
									</Button>
									{button.svg && (
										<div
											style={{
												marginTop: "10px",
												alignItems: "center",
												display: "grid",
											}}
										>
											<img
												src={button.svg}
												alt={__("Card Svg", "simple-hero-section")}
												style={{
													maxWidth: "100%",
													border: "1px",
													padding: "10px",
												}}
											/>
											<Button
												onSelect={(media) => onChangeButton("svg", "")}
												variant="link"
												isDestructive
											>
												{__("Remove Image", "simple-hero-section")}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="simple-hero-section">
				<div className="wrapper">
					<header>
						<h1>{heading}</h1>
						<p>{paragraph}</p>
						{button?.text && (
							<CustomButton {...button}>
								<p>{button.text}</p> <img src={button.svg} />
							</CustomButton>
						)}
					</header>
					<img src={image} alt={image_alt} />
				</div>
			</section>
		</>
	);
}
