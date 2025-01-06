/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	URLInput,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	TextareaControl,
	TextControl,
	Button,
	SelectControl,
	PanelBody,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import fetchButtonSvg from '../../../utils/fetchButtonSvg';
import fetchCornerImageSvg from '../../../utils/fetchCornerImageSvg'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { cards = [] } = attributes;

	// Helper to update cards array
	const updateCard = (index, field, value) => {
		const newCards = [...cards];
		newCards[index] = {
			...newCards[index],
			[field]: value,
		};
		setAttributes({ cards: newCards });
	};

	// Helper to add a new card
	const addCard = () => {
		setAttributes({
			cards: [
				...cards,
				{
					heading: '',
					color: 'gray',
					cornerImage: '',
					button: {
						text: '',
						url: '',
						svg: '',
					},
					pins: [],
				},
			],
		});
	};

	// Helper to remove a card
	const removeCard = (index) => {
		const newCards = cards.filter((_, i) => i !== index);
		setAttributes({ cards: newCards });
	};

	// Helper to update pins array
	const updatePin = (cardIndex, pinIndex, value) => {
		const newCards = [...cards];
		const newPins = [...(newCards[cardIndex].pins || [])];
		newPins[pinIndex] = value;
		newCards[cardIndex].pins = newPins;
		setAttributes({ cards: newCards });
	};

	// Helper to add a new pin
	const addPin = (cardIndex) => {
		const newCards = [...cards];
		const newPins = [...(newCards[cardIndex].pins || []), ''];
		newCards[cardIndex].pins = newPins;
		setAttributes({ cards: newCards });
	};

	// Helper to remove a pin
	const removePin = (cardIndex, pinIndex) => {
		const newCards = [...cards];
		const newPins = newCards[cardIndex].pins.filter((_, i) => i !== pinIndex);
		newCards[cardIndex].pins = newPins;
		setAttributes({ cards: newCards });
	};

	const onSelectSVG = (media, card) => {
		fetchButtonSvg(media, setAttributes, card.button);
	};

	const onCornerImageSelectSvg = (media, card) => {
		fetchCornerImageSvg(media, setAttributes, card)
	}

	// Render controls for pins
	const renderPinsControls = (cardIndex) =>
		(cards[cardIndex].pins || []).map((pin, pinIndex) => (
			<div key={pinIndex} style={{ marginBottom: '10px' }}>
				<TextControl
					label={__('Pin text', 'cards-section')}
					value={pin}
					onChange={(value) => updatePin(cardIndex, pinIndex, value)}
				/>
				<Button
					isDestructive
					isSmall
					onClick={() => removePin(cardIndex, pinIndex)}
				>
					{__('Remove Pin', 'cards-section')}
				</Button>
			</div>
		));

	// Render controls for cards
	const renderCardControls = () =>
		cards.map((card, cardIndex) => (
			<div key={cardIndex} style={{ marginBottom: '20px' }}>
				<TextareaControl
					label={__('Heading', 'cards-section')}
					value={card.heading || ''}
					onChange={(value) => updateCard(cardIndex, 'heading', value)}
				/>
				{renderPinsControls(cardIndex)}
				<Button
					isPrimary
					isSmall
					onClick={() => addPin(cardIndex)}
					style={{ marginTop: '10px' }}
				>
					{__('Add Pin', 'cards-section')}
				</Button>
				<SelectControl
					label={__('Color Type', 'cards-section')}
					value={card.color}
					options={[
						{ label: 'Szary', value: 'gray' },
						{ label: 'Niebiesko-szary', value: 'blue-green' },
					]}
					onChange={(value) => updateCard(cardIndex, 'color', value)}
				/>
				<MediaUpload
					onSelect={(media) => onCornerImageSelectSvg(media, card)}
					allowedTypes={['image/svg+xml']}
					render={({ open }) => (
						<Button
							onClick={open}
							variant="secondary"
							isPrimary={false}
							className="custom-media-upload-button"
							style={{ display: "grid" }}
						>
							{card.cornerImage ? __('Replace Corner Image SVG', 'cards-section') : __('Upload Corner Image SVG', 'cards-section')}
						</Button>
					)}
				/>
				<TextControl
					label={__('Button Text', 'cards-section')}
					value={card.button?.text || ''}
					onChange={(value) =>
						updateCard(cardIndex, 'button', {
							...card.button,
							text: value,
						})
					}
				/>
				<URLInput
					label={__('Button URL', 'cards-section')}
					value={card.button?.url || ''}
					onChange={(value) =>
						updateCard(cardIndex, 'button', {
							...card.button,
							url: value,
						})
					}
				/>
				<MediaUpload
					onSelect={(media) => onSelectSVG(media, card)}
					allowedTypes={['image/svg+xml']}
					render={({ open }) => (
						<Button
							onClick={open}
							variant="secondary"
							isPrimary={false}
							className="custom-media-upload-button"
							style={{ display: "grid" }}
						>
							{card.button?.svg ? __('Replace Button SVG', 'cards-section') : __('Upload Button SVG', 'cards-section')}
						</Button>
					)}
				/>
				{card.button?.svg && (
					<Button
						onClick={() =>
							updateCard(cardIndex, 'button', {
								...card.button,
								svg: null,
							})
						}
						variant="link"
						isDestructive
						className="custom-remove-svg-button"
						style={{ display: 'grid' }}
					>
						{__('Remove SVG', 'cards-section')}
					</Button>
				)}
				<Button
					isDestructive
					isSmall
					onClick={() => removeCard(cardIndex)}
					style={{ marginTop: '10px' }}
				>
					{__('Remove Card', 'cards-section')}
				</Button>
			</div>
		));

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'cards-section')}>
					{renderCardControls()}
					<Button isPrimary onClick={addCard}>
						{__('Add Card', 'cards-section')}
					</Button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="cards-section">
				{__('Cards Section – hello from the editor!', 'cards-section')}
			</section>
		</>
	);
}
