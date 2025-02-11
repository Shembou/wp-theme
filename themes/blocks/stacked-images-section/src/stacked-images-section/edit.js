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
	TextareaControl,
	TextControl,
	Button,
	ToggleControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

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
		tag = "",
		heading = "",
		paragraph = "",
		leftImage = "",
		leftImage_alt = "",
		rightImage = "",
		rightImage_alt = "",
		isReversed,
	} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Header Settings", "stacked-images-section")}>
					<PanelRow>
						<TextControl
							label={__("Tag", "stacked-images-section")}
							value={tag || ""}
							onChange={(value) => setAttributes({ tag: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Heading", "stacked-images-section")}
							value={heading || ""}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextareaControl
							label={__("paragraph", "stacked-images-section")}
							value={paragraph || ""}
							onChange={(value) => setAttributes({ paragraph: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__("Reverse Layout", "stacked-images-section")}
							checked={isReversed}
							onChange={(value) => setAttributes({ isReversed: value })}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__("Images Settings", "stacked-images-section")}>
					<PanelRow>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({ leftImage: media.url });
								setAttributes({ leftImage_alt: media.alt });
							}}
							allowedTypes={["image"]}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{leftImage
											? __("Replace Image", "stacked-images-section")
											: __("Upload Image", "stacked-images-section")}
									</Button>
									{leftImage && (
										<div
											style={{
												marginTop: "10px",
												alignItems: "center",
												display: "grid",
											}}
										>
											<img
												src={leftImage}
												alt={__("Tile Image", "stacked-images-section")}
												style={{
													maxWidth: "100%",
													border: "1px solid #ccc",
													padding: "10px",
												}}
											/>
											<Button
												onClick={() => setAttributes({ leftImage: "" })}
												variant="link"
												isDestructive
											>
												{__("Remove Image", "stacked-images-section")}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
					<PanelRow>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({ rightImage: media.url });
								setAttributes({ rightImage_alt: media.alt });
							}}
							allowedTypes={["image"]}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{rightImage
											? __("Replace Image", "stacked-images-section")
											: __("Upload Image", "stacked-images-section")}
									</Button>
									{rightImage && (
										<div
											style={{
												marginTop: "10px",
												alignItems: "center",
												display: "grid",
											}}
										>
											<img
												src={rightImage}
												alt={__("Tile Image", "stacked-images-section")}
												style={{
													maxWidth: "100%",
													border: "1px solid #ccc",
													padding: "10px",
												}}
											/>
											<Button
												onClick={() => setAttributes({ rightImage: "" })}
												variant="link"
												isDestructive
											>
												{__("Remove Image", "stacked-images-section")}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="stacked-images-section">
				{isReversed ? (
					<>
						<div>
							<img src={leftImage} alt={leftImage_alt} className="image-left" />
							<img
								src={rightImage}
								alt={rightImage_alt}
								className="image-right"
							/>
						</div>
						<header>
							<p className="tag">{tag}</p>
							<h2>{heading}</h2>
							<p className="paragraph">{paragraph}</p>
						</header>
					</>
				) : (
					<>
						<header>
							<p className="tag">{tag}</p>
							<h2>{heading}</h2>
							<p className="paragraph">{paragraph}</p>
						</header>
						<div>
							<img src={leftImage} alt={leftImage_alt} className="image-left" />
							<img
								src={rightImage}
								alt={rightImage_alt}
								className="image-right"
							/>
						</div>
					</>
				)}
			</section>
		</>
	);
}
