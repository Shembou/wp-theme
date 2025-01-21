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
		text = '',
		svg = '',
		link = ''
	} = attributes
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Link settings')}>
					<PanelRow>
						<TextControl
							label="Button URL"
							value={link}
							onChange={(value) => setAttributes({ link: value })}
						/>
					</PanelRow>
					{/* Button Text Field */}
					<PanelRow>
						<TextControl
							label="Button Text"
							value={text}
							onChange={(value) => setAttributes({ text: value })}
						/>
					</PanelRow>
					{/* Button SVG Field */}
					<PanelRow>
						<MediaUpload
							onSelect={(media) => setAttributes({ svg: media.url })}
							allowedTypes={['image']}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{svg
											? __('Replace svg', 'header-button-with-icon')
											: __('Upload svg', 'header-button-with-icon')}
									</Button>
									{svg && (
										<div style={{ marginTop: '10px', alignItems: 'center', display: 'flex' }}>
											<img
												src={svg}
												alt={__('svg', 'header-button-with-icon')}
												style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
											/>
											<Button
												onClick={() => setAttributes({ svg: '' })}
												variant="link"
												isDestructive
											>
												{__('Remove svg', 'header-button-with-icon')}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls >
			<a {...useBlockProps()} id="custom-header-link" href={link}>
				{text} <img src={svg} />
			</a>
		</>
	);
}
