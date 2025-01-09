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
import { InspectorControls, useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, TextControl, Button } from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import fetchButtonSvg from '../../../utils/fetchButtonSvg';

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
		tag = '',
		heading = '',
		paragraph = '',
		cards = []
	} = attributes

	const updateAttribute = (key, value) => {
		setAttributes({ [key]: value });
	};

	const updateCard = (index, field, value) => {
		const newCards = [...cards];
		newCards[index] = {
			...newCards[index],
			[field]: value,
		};
		setAttributes({ cards: newCards })
	}

	const addCard = () => {
		setAttributes({
			cards: [
				...cards,
				{
					heading: '',
					buttons: [],
					paragraph: '',
					icon: '',
					image: ''
				}
			]
		})
	}

	const renderButtonControls = (cardIndex) => {
		
	}

	const renderCardControls = () =>
		cards.map((card, cardIndex) => (
			<div key={cardIndex} style={{ marginBottom: '20px' }}>
				<TextControl
					label={__('Card Heading text', 'services-section')}
					value={card.heading || ''}
					onChange={(value) => updateCard(cardIndex, 'heading', value)}
				/>
				<TextareaControl
					label={__('Card Text', 'services-section')}
					value={card.paragraph || ''}
					onChange={(value) => updateCard(cardIndex, 'paragraph', value)}
				/>
				<MediaUpload
					onSelect={(media) => updateCard(cardIndex, 'icon', media.url)}
					allowedTypes={['image']}
					render={({ open }) => (
						<div>
							<Button onClick={open} variant="secondary">
								{card.icon
									? __('Replace Icon', 'services-section')
									: __('Upload Icon', 'services-section')}
							</Button>
							{card.icon && (
								<div style={{ marginTop: '10px', alignItems: 'center', display: 'flex' }}>
									<img
										src={card.icon}
										alt={__('Card Icon', 'services-section')}
										style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
									/>
									<Button
										onClick={() => updateCard(cardIndex, 'icon', '')}
										variant="link"
										isDestructive
									>
										{__('Remove Icon', 'services-section')}
									</Button>
								</div>
							)}
						</div>
					)}
				/>
				<MediaUpload
					onSelect={(media) => updateCard(cardIndex, 'image', media.url)}
					allowedTypes={['image']}
					render={({ open }) => (
						<div>
							<Button onClick={open} variant="secondary">
								{card.image
									? __('Replace Image', 'services-section')
									: __('Upload Image', 'services-section')}
							</Button>
							{card.image && (
								<div style={{ marginTop: '10px', alignItems: 'center', display: 'flex' }}>
									<img
										src={card.image}
										alt={__('Card Image', 'services-section')}
										style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
									/>
									<Button
										onClick={() => updateCard(cardIndex, 'image', '')}
										variant="link"
										isDestructive
									>
										{__('Remove Image', 'services-section')}
									</Button>
								</div>
							)}
						</div>
					)}
				/>
				{renderButtonControls(cardIndex)}
			</div>
		))

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'services-section')}>
					<TextControl
						label={__('Tag Text', 'services-section')}
						value={tag || ''}
						onChange={(value) => updateAttribute('tag', value)}
					/>
					<TextareaControl
						label={__('Heading', 'services-section')}
						value={heading || ''}
						onChange={(value) => updateAttribute('heading', value)}
					/>
					<TextareaControl
						label={__('Paragraph', 'services-section')}
						value={paragraph || ''}
						onChange={(value) => updateAttribute('paragraph', value)}
					/>
					{renderCardControls()}
					<Button isPrimary onClick={addCard}>
						{__('Add Card', 'cards-section')}
					</Button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				{__(
					'Services Section – hello from the editor!',
					'services-section'
				)}
			</section>
		</>
	);
}
