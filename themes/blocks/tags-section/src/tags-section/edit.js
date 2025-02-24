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
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	PanelRow,
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
	const { tags = [], tag = "", heading = "", paragraph = "" } = attributes;

	const updateTags = (index, field, value) => {
		const newTags = [...tags];
		newTags[index] = {
			...newTags[index],
			[field]: value,
		};
		setAttributes({ tags: newTags });
	};

	// Function to add a new empty tag
	const addTag = () => {
		setAttributes({
			tags: [
				...tags,
				{
					tag: "",
					url: "",
				},
			],
		}); // Add a new empty string
	};

	// Function to remove a specific tag
	const removeTag = (index) => {
		const newTags = tags.filter((_, i) => i !== index); // Correctly create a new array
		setAttributes({ tags: newTags });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Heading (optional use)", "tags-section")}>
					<PanelRow>
						<TextControl
							label={__("Tag", "tags-section")}
							value={tag || ""}
							onChange={(value) => setAttributes({ tag: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Heading", "tags-section")}
							value={heading || ""}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Paragraph", "tags-section")}
							value={paragraph || ""}
							onChange={(value) => setAttributes({ paragraph: value })}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={__("Tags Settings", "tags-section")}
					initialOpen={true}
				>
					{tags.map((tag, index) => (
						<React.Fragment key={index}>
							<PanelRow>
								<TextControl
									label={__("Tag Text", "tags-section")}
									value={tag.tag || ""} // Ensure no undefined value
									onChange={(value) => updateTags(index, "tag", value)}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={__("Tag Url", "tags-section")}
									value={tag.url || ""} // Ensure no undefined value
									onChange={(value) => updateTags(index, "url", value)}
								/>
							</PanelRow>
							<PanelRow>
								<Button
									isDestructive
									onClick={() => removeTag(index)}
									style={{ marginLeft: "8px" }}
								>
									{__("Remove", "tags-section")}
								</Button>
							</PanelRow>
						</React.Fragment>
					))}
					<PanelRow>
						<Button isPrimary onClick={addTag}>
							{__("Add tag", "tags-section")}
						</Button>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="tags-section">
				{heading != "" && (
					<header>
						<p className="tag">{tag}</p>
						<h2>{heading}</h2>
						<p>{paragraph}</p>
					</header>
				)}
				<div className={`tags ${heading != "" ? "heading-variant" : ""}`}>
					{tags &&
						tags.map(({ tag, url }, index) => (
							<a className="tag" key={index} href={url}>
								{tag}
							</a>
						))}
				</div>
			</section>
		</>
	);
}
