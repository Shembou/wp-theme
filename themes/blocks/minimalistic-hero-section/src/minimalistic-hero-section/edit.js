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
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';

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
		paragraph = '',
	} = attributes
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Section contents', 'minimalistic-hero-section')}>
					<PanelRow>
						<TextControl
							label={__('Tag', 'minmialistic-hero-section')}
							value={tag || ''}
							onChange={(value) => setAttributes({ tag: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Heading', 'minmialistic-hero-section')}
							value={heading || ''}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Paragraph', 'minmialistic-hero-section')}
							value={paragraph || ''}
							onChange={(value) => setAttributes({ paragraph: value })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id='minimalistic-hero-section'>
				<header>
					<p className='tag'>{tag}</p>
					<h2>{heading}</h2>
					<p>{paragraph}</p>
				</header>
			</section>
		</>
	);
}
