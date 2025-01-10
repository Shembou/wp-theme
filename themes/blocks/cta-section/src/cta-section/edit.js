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
import { PanelBody, TextControl, Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
		heading = '',
		backgroundImage = '',
		button = {
			text: '',
			url: '',
			svg: '',
		}
	} = attributes

	const onChangeButton = (field, value) => {
		const newButton = { ...attributes.button, [field]: value };
		setAttributes({ button: newButton })
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'cta-section')}>
					<TextControl
						label={__('Heading', 'cta-section')}
						value={heading || ''}
						onChange={(value) => setAttributes({ heading: value })}
					/>
					<MediaUpload
						onSelect={(media) => setAttributes({ backgroundImage: media.url })}
						allowedTypes={['image']}
						render={({ open }) => (
							<div>
								<Button onClick={open} variant="secondary">
									{backgroundImage
										? __('Replace Image', 'cta-section')
										: __('Upload Image', 'cta-section')}
								</Button>
								{backgroundImage && (
									<div style={{ marginTop: '10px', alignItems: 'center', display: 'grid' }}>
										<img
											src={backgroundImage}
											alt={__('Background Image', 'cta-section')}
											style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
										/>
										<Button
											onSelect={(media) => setAttributes({ backgroundImage: media.url })}
											variant="link"
											isDestructive
										>
											{__('Remove Image', 'cta-section')}
										</Button>
									</div>
								)}
							</div>
						)}
					/>
					<TextControl
						label={__('Button Url', 'cta-section')}
						value={button.url || ''}
						onChange={(value) => onChangeButton('url', value)}
					/>
					<TextControl
						label={__('Button text', 'cta-section')}
						value={button.text || ''}
						onChange={(value) => onChangeButton('text', value)}
					/>
					<MediaUpload
						onSelect={(media) => onChangeButton('svg', media.url)}
						allowedTypes={['image']}
						render={({ open }) => (
							<div>
								<Button onClick={open} variant="secondary">
									{button.svg
										? __('Replace Svg', 'cta-section')
										: __('Upload Svg', 'cta-section')}
								</Button>
								{button.svg && (
									<div style={{ marginTop: '10px', alignItems: 'center', display: 'grid' }}>
										<img
											src={button.svg}
											alt={__('Card Svg', 'cta-section')}
											style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
										/>
										<Button
											onSelect={(media) => onChangeButton('svg', '')}
											variant="link"
											isDestructive
										>
											{__('Remove Image', 'cta-section')}
										</Button>
									</div>
								)}
							</div>
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="cta-section">
				<h2 style={{ background: `linear-gradient(0deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.70) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat` }} className={'heading'}>{heading}</h2>
				<a href={button.url} className='button-wrapper'>
					<p>{button.text}</p>
					<img className='icon' src={button.svg} />
				</a>
			</section >
		</>
	);
}
