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
import { PanelBody, PanelRow, TextControl, Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import CustomButton from '../../../common/CustomButton';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const updateButtonAttributes = (key, value) => {
		const newButton = { ...button, [key]: value }
		setAttributes({ button: newButton })
	}

	const {
		heading = '',
		paragraph = '',
		button = {
			url: '',
			text: '',
			svg: ''
		},
		image = '',
	} = attributes
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label="Heading"
							value={heading || ''}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Paragraph"
							value={paragraph || ''}
							onChange={(value) => setAttributes({ paragraph: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Button url"
							value={button.url || ''}
							onChange={(value) => updateButtonAttributes('url', value)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Button text"
							value={button.text || ''}
							onChange={(value) => updateButtonAttributes('text', value)}
						/>
					</PanelRow>
					<PanelRow>
						<MediaUpload
							onSelect={(media) => updateButtonAttributes('svg', media.url)}
							allowedTypes={['image']}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{button.svg
											? __('Replace svg', 'hero-contact-section')
											: __('Upload svg', 'hero-contact-section')}
									</Button>
									{button.svg && (
										<div style={{ marginTop: '10px', alignItems: 'center', display: 'flex' }}>
											<img
												src={button.svg}
												alt={__('Button svg', 'hero-contact-section')}
												style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
											/>
											<Button
												onClick={() => updateButtonAttributes('svg', '')}
												variant="link"
												isDestructive
											>
												{__('Remove svg', 'hero-contact-section')}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
					<PanelRow>
						<MediaUpload
							onSelect={(media) => setAttributes({ image: media.url })}
							allowedTypes={['image']}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{image
											? __('Replace Image', 'hero-contact-section')
											: __('Upload Image', 'hero-contact-section')}
									</Button>
									{image && (
										<div style={{ marginTop: '10px', alignItems: 'center', display: 'flex' }}>
											<img
												src={image}
												alt={__('Image', 'hero-contact-section')}
												style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
											/>
											<Button
												onClick={() => setAttributes({ image: '' })}
												variant="link"
												isDestructive
											>
												{__('Remove Image', 'hero-contact-section')}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="hero-contact-section">
				<div className='wrapper'>
					<header>
						<h1>{heading}</h1>
						<p>{paragraph}</p>
						<CustomButton {...button}>
							{button.text}
							<img src={button.svg} />
						</CustomButton>
					</header>
					<img src={image} className='big-icon' />
				</div>
			</section>
		</>
	);
}
