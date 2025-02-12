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
	Button,
	TextControl,
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
	const { text, icon, icon_alt } = attributes;

	const copyText = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Values">
					<PanelRow>
						<TextControl
							label={__("Text", "faq-section")}
							value={text || ""}
							onChange={(value) => setAttributes({ text: value })}
						/>
					</PanelRow>
					<PanelRow>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ icon: media.url, icon_alt: media.alt })
							}
							allowedTypes={["image"]}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{icon
											? __("replace icon", "copy-button")
											: __("upload icon", "copy-button")}
									</Button>
									{icon && (
										<div
											style={{
												marginTop: "10px",
												alignItems: "center",
												display: "grid",
											}}
										>
											<img
												src={icon}
												alt={__("Icon", "copy-button")}
												style={{
													maxWidth: "100%",
													border: "1px",
													padding: "10px",
												}}
											/>
											<Button
												onClick={() => setAttributes({ icon: "" })}
												variant="link"
												isDestructive
											>
												{__("Remove icon", "copy-button")}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<span {...useBlockProps()} id="info">
				<img src={icon} alt={icon_alt} />
				<p>{text}</p>
				<button onClick={() => copyText(text)} className="copy-button">
					skopiuj
				</button>
			</span>
		</>
	);
}
