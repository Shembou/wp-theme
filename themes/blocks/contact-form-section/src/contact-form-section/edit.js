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
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { TextareaControl, TextControl, PanelBody, PanelRow } from '@wordpress/components';

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
		tag = '',
		heading = '',
		description = '',
		phone = '',
		mail = ''
	} = attributes


	return (
		<>
			<InspectorControls>
				<PanelBody title="Text configuration">
					<PanelRow>
						<TextControl
							label={__('Tag', 'contact-form-section')}
							value={tag || ''}
							onChange={(value) => setAttributes({ tag: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Heading', 'contact-form-section')}
							value={heading || ''}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextareaControl
							label={__('Description', 'contact-form-section')}
							value={description || ''}
							onChange={(value) => setAttributes({ description: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Phone', 'contact-form-section')}
							value={phone || ''}
							onChange={(value) => setAttributes({ phone: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Mail', 'contact-form-section')}
							value={mail || ''}
							onChange={(value) => setAttributes({ mail: value })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id='contact-form-section'>
				<div className='data-wrapper'>
					<header>
						<p className='tag'>{tag}</p>
						<h2>{heading}</h2>
						<p>{description}</p>
					</header>
					<div>
						<p>Inne pytanie? Napisz do nas lub zadzwoń</p>
						<div>
							<span>
								<ContactIcon />
								<p>
									{phone}
								</p>
								<button onClick={() => copyText(phone)} className='copy-button'>
									skopiuj
								</button>
							</span>
							<span>
								<EmailIcon />
								<p>
									{mail}
								</p>
								<button onClick={() => copyText(mail)} className='copy-button'>
									skopiuj
								</button>
							</span>
						</div>
					</div>
				</div>
				<div className='contact-form-wrapper'>
					<InnerBlocks allowedBlocks={['core/shortcode']} />
				</div>
			</section>
		</>
	);
}

const ContactIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 16 16"
		className='icon'
	>
		<path
			fill="#1A4553"
			d="M9.017 2.87a.5.5 0 0 1 .612-.353 5.39 5.39 0 0 1 3.854 3.854.5.5 0 1 1-.966.258A4.4 4.4 0 0 0 9.37 3.483a.5.5 0 0 1-.354-.613M8.87 5.483c.862.23 1.416.784 1.646 1.646a.5.5 0 1 0 .966-.258c-.32-1.198-1.156-2.034-2.354-2.354a.5.5 0 1 0-.258.966m5.121 5.96A3.516 3.516 0 0 1 10.5 14.5c-4.962 0-9-4.038-9-9a3.516 3.516 0 0 1 3.058-3.493 1 1 0 0 1 1.038.595l1.32 2.947v.008a1 1 0 0 1-.115.991L5.5 8.091c.468.95 1.463 1.937 2.427 2.406l1.521-1.294.047-.035a1 1 0 0 1 .948-.087l.008.003 2.945 1.32a1 1 0 0 1 .596 1.038M13 11.316h-.007l-2.937-1.315-1.522 1.294-.046.035a1 1 0 0 1-.985.071C6.333 10.837 5.166 9.68 4.6 8.521a1 1 0 0 1 .099-1.03L6 5.947 4.688 3.009v-.007A2.51 2.51 0 0 0 2.5 5.5a8.01 8.01 0 0 0 8 8 2.51 2.51 0 0 0 2.5-2.183"
		></path>
	</svg>
)

const EmailIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 16 16"
		className='icon'
	>
		<path
			fill="#1A4553"
			d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3M8 8.322 3.286 4h9.428zM6.17 8 2.5 11.363V4.637zm.74.678.75.69a.5.5 0 0 0 .676 0l.75-.69L12.71 12H3.286zM9.83 8l3.67-3.364v6.728z"
		></path>
	</svg>
);