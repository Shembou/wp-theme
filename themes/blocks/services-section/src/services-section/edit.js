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
	TextareaControl,
	TextControl,
	Button,
	SelectControl,
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
	const { tag = "", heading = "", paragraph = "", cards = [] } = attributes;

	const updateAttribute = (key, value) => {
		setAttributes({ [key]: value });
	};

	const updateCard = (index, field, value) => {
		const newCards = [...cards];
		newCards[index] = {
			...newCards[index],
			[field]: value,
		};
		setAttributes({ cards: newCards });
	};

	const updateIcon = (cardIndex, media) => {
		const newCards = [...cards];
		newCards[cardIndex] = {
			...newCards[cardIndex],
			icon: media.url,
			icon_alt: media.alt,
		};
		setAttributes({ cards: newCards });
	};

	const updateImage = (cardIndex, media) => {
		const newCards = [...cards];
		newCards[cardIndex] = {
			...newCards[cardIndex],
			image: media.url,
			image_alt: media.alt,
		};
		setAttributes({ cards: newCards });
	};

	const addCard = () => {
		setAttributes({
			cards: [
				...cards,
				{
					heading: "",
					buttons: [],
					paragraph: "",
					icon: "",
					image: "",
					icon_alt: "",
					image_alt: "",
				},
			],
		});
	};

	const updateButton = (cardIndex, index, field, value) => {
		const newCards = [...cards];
		const newButtons = [...(newCards[cardIndex].buttons || [])];
		newButtons[index] = {
			...newButtons[index],
			[field]: value,
		};
		newCards[cardIndex].buttons = newButtons; // Update buttons in the card
		setAttributes({ cards: newCards });
	};

	const updateButtonSvg = (cardIndex, index, media) => {
		const newCards = [...cards];
		const newButtons = [...(newCards[cardIndex].buttons || [])];
		newButtons[index] = {
			...newButtons[index],
			svg: media.url,
			svg_alt: media.alt,
		};
		newCards[cardIndex].buttons = newButtons;
		setAttributes({ cards: newCards });
	};

	const removeButton = (cardIndex, buttonIndex) => {
		const newCards = [...cards];
		const newButtons = newCards[cardIndex].buttons.filter(
			(_, i) => i !== buttonIndex,
		);
		newCards[cardIndex].buttons = newButtons;
		setAttributes({ cards: newCards });
	};

	const addButton = (cardIndex) => {
		const newCards = [...cards];
		const newButtons = [...(newCards[cardIndex].buttons || [])];
		const buttonToAdd = { url: "", text: "", svg: "", buttonType: "" }; // Define default button values
		newButtons.push(buttonToAdd); // Add the new button
		newCards[cardIndex].buttons = newButtons; // Update the buttons array in the card
		setAttributes({ cards: newCards }); // Update the state
	};

	const renderButtonControls = (cardIndex) => (
		<div>
			{(cards[cardIndex].buttons || []).map((button, index) => (
				<div key={index} style={{ marginBottom: "10px" }}>
					<TextControl
						label={__("Button Url", "services-section")}
						value={button.url || ""}
						onChange={(value) => updateButton(cardIndex, index, "url", value)}
					/>
					<TextControl
						label={__("Button text", "services-section")}
						value={button.text || ""}
						onChange={(value) => updateButton(cardIndex, index, "text", value)}
					/>
					<SelectControl
						label={__("Button type", "services-section")}
						value={button.buttonType || ""}
						options={[
							{ label: "Primary", value: "primary" },
							{ label: "Secondary", value: "secondary" },
						]}
						onChange={(value) =>
							updateButton(cardIndex, index, "buttonType", value)
						}
					/>
					<MediaUpload
						onSelect={(media) => updateButtonSvg(cardIndex, index, media)}
						allowedTypes={["image"]}
						render={({ open }) => (
							<div>
								<Button onClick={open} variant="secondary">
									{button.svg
										? __("Replace Svg", "services-section")
										: __("Upload Svg", "services-section")}
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
											alt={__("Card Svg", "services-section")}
											style={{
												maxWidth: "100%",
												border: "1px",
												padding: "10px",
											}}
										/>
										<Button
											onSelect={(media) =>
												updateButton(cardIndex, index, "svg", "")
											}
											variant="link"
											isDestructive
										>
											{__("Remove Image", "services-section")}
										</Button>
									</div>
								)}
							</div>
						)}
					/>
					<Button
						isDestructive
						isSmall
						onClick={() => removeButton(cardIndex, index)}
					>
						{__("Remove Button", "services-section")}
					</Button>
				</div>
			))}
			<Button
				isPrimary
				onClick={() => addButton(cardIndex)}
				style={{ marginTop: "10px" }}
			>
				{__("Add Button", "services-section")}
			</Button>
		</div>
	);

	const renderCardControls = () =>
		cards.map((card, cardIndex) => (
			<div key={cardIndex} style={{ marginBottom: "20px" }}>
				<TextControl
					label={__("Card Heading text", "services-section")}
					value={card.heading || ""}
					onChange={(value) => updateCard(cardIndex, "heading", value)}
				/>
				<TextareaControl
					label={__("Card Text", "services-section")}
					value={card.paragraph || ""}
					onChange={(value) => updateCard(cardIndex, "paragraph", value)}
				/>
				<MediaUpload
					onSelect={(media) => {
						updateIcon(cardIndex, media);
					}}
					allowedTypes={["image"]}
					render={({ open }) => (
						<div>
							<Button onClick={open} variant="secondary">
								{card.icon
									? __("Replace Icon", "services-section")
									: __("Upload Icon", "services-section")}
							</Button>
							{card.icon && (
								<div
									style={{
										marginTop: "10px",
										alignItems: "center",
										display: "flex",
									}}
								>
									<img
										src={card.icon}
										alt={__("Card Icon", "services-section")}
										style={{ maxWidth: "100%", border: "1px", padding: "10px" }}
									/>
									<Button
										onClick={() => updateCard(cardIndex, "icon", "")}
										variant="link"
										isDestructive
									>
										{__("Remove Icon", "services-section")}
									</Button>
								</div>
							)}
						</div>
					)}
				/>
				<MediaUpload
					onSelect={(media) => {
						updateImage(cardIndex, media);
					}}
					allowedTypes={["image"]}
					render={({ open }) => (
						<div>
							<Button onClick={open} variant="secondary">
								{card.image
									? __("Replace Image", "services-section")
									: __("Upload Image", "services-section")}
							</Button>
							{card.image && (
								<div
									style={{
										marginTop: "10px",
										alignItems: "center",
										display: "grid",
									}}
								>
									<img
										src={card.image}
										alt={__("Card Image", "services-section")}
										style={{ maxWidth: "100%", border: "1px", padding: "10px" }}
									/>
									<Button
										onClick={() => updateCard(cardIndex, "image", "")}
										variant="link"
										isDestructive
									>
										{__("Remove Image", "services-section")}
									</Button>
								</div>
							)}
						</div>
					)}
				/>
				{renderButtonControls(cardIndex)}
			</div>
		));

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "services-section")}>
					<TextControl
						label={__("Tag Text", "services-section")}
						value={tag || ""}
						onChange={(value) => updateAttribute("tag", value)}
					/>
					<TextareaControl
						label={__("Heading", "services-section")}
						value={heading || ""}
						onChange={(value) => updateAttribute("heading", value)}
					/>
					<TextareaControl
						label={__("Paragraph", "services-section")}
						value={paragraph || ""}
						onChange={(value) => updateAttribute("paragraph", value)}
					/>
					{renderCardControls()}
					<Button isPrimary onClick={addCard}>
						{__("Add Card", "cards-section")}
					</Button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="services-section">
				<header>
					<p className="tag">{tag}</p>
					<h2>{heading}</h2>
					<p>{paragraph}</p>
				</header>
				<div className="cards-wrapper">
					{cards &&
						cards.map((card, index) => (
							<div
								className={`card-wrapper ${
									index % 2 == 1 && `additional-wrapper-styles`
								}`}
								key={index}
							>
								<div className="text-wrapper">
									<h3 className="card-heading">{card.heading}</h3>
									<p>{card.paragraph}</p>
									<div className={"buttons-wrapper"}>
										{card.buttons &&
											card.buttons.map((button, buttonIndex) => (
												<div className="button-wrapper" key={buttonIndex}>
													<CustomButton
														url={button.url}
														className={`${button.buttonType}`}
													>
														<>
															{button.text}
															<img src={button.svg} alt={button.svg_alt}/>
														</>
													</CustomButton>
												</div>
											))}
									</div>
									<img className={"icon"} src={card.icon} alt={card.icon_alt} />
								</div>
								<img src={card.image} alt={card.image_alt} className="image" />
							</div>
						))}
				</div>
			</section>
		</>
	);
}
