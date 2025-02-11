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

import {
	PanelBody,
	TextareaControl,
	TextControl,
	Button,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { heading = "", paragraph = "", tiles = [] } = attributes;

	let tileCounter = 0;

	const addTile = () => {
		const newTile = { heading: "", paragraph: "", image: "" }; // Default values for a new tile
		const updatedTiles = [...tiles, newTile];
		setAttributes({ tiles: updatedTiles });
	};

	const updateTile = (index, field, value) => {
		const updatedTiles = [...tiles];
		updatedTiles[index] = { ...updatedTiles[index], [field]: value };
		setAttributes({ tiles: updatedTiles });
	};

	const renderTileControls = () => (
		<div>
			{tiles.map((tile, index) => (
				<div key={index} style={{ marginBottom: "20px" }}>
					<TextControl
						label={__("Tile Heading", "tiles-section")}
						value={tile.heading || ""}
						onChange={(value) => updateTile(index, "heading", value)}
					/>
					<TextareaControl
						label={__("Tile Paragraph", "tiles-section")}
						value={tile.paragraph || ""}
						onChange={(value) => updateTile(index, "paragraph", value)}
					/>
					<MediaUpload
						onSelect={(media) => {
							updateTile(index, "image", media.url);
							updateTile(index, "image_alt", media.alt);
						}}
						allowedTypes={["image"]}
						render={({ open }) => (
							<div>
								<Button onClick={open} variant="secondary">
									{tile.image
										? __("Replace Image", "tiles-section")
										: __("Upload Image", "tiles-section")}
								</Button>
								{tile.image && (
									<div
										style={{
											marginTop: "10px",
											alignItems: "center",
											display: "grid",
										}}
									>
										<img
											src={tile.image}
											alt={__("Tile Image", "tiles-section")}
											style={{
												maxWidth: "100%",
												border: "1px solid #ccc",
												padding: "10px",
											}}
										/>
										<Button
											onClick={() => updateTile(index, "image", "")}
											variant="link"
											isDestructive
										>
											{__("Remove Image", "tiles-section")}
										</Button>
									</div>
								)}
							</div>
						)}
					/>
				</div>
			))}
			<Button onClick={addTile} variant="primary" style={{ marginTop: "20px" }}>
				{__("Add Tile", "tiles-section")}
			</Button>
		</div>
	);
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Component Settings", "tiles-section")}>
					<TextControl
						label={__("Heading", "tiles-section")}
						value={heading || ""}
						onChange={(value) => setAttributes({ heading: value })}
					/>
					<TextareaControl
						label={__("Paragraph", "tiles-section")}
						value={paragraph || ""}
						onChange={(value) => setAttributes({ paragraph: value })}
					/>
					{renderTileControls()}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} id="tiles-section">
				<>
					<header>
						<h2>{heading}</h2>
						<p>{paragraph}</p>
					</header>
					{tiles.map((tile, index) => {
						if (tile.image !== "") {
							return <img src={tile.image} alt={tile.image_alt} key={index} />;
						} else {
							tileCounter++;
							return (
								<div
									className={`tile ${index % 2 != 0 ? "even" : "odd"}`}
									key={index}
								>
									<h3>{String(tileCounter).padStart(2, "0")}</h3>
									<h3>{tile.heading}</h3>
									<p>{tile.paragraph}</p>
								</div>
							);
						}
					})}
				</>
			</div>
		</>
	);
}
