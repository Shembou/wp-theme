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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, IconButton, Button, PanelRow, TextareaControl } from '@wordpress/components';

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
		counter = []
	} = attributes

	// Update base attributes
	const updateBaseAttribute = (key, value) => {
		setAttributes({ [key]: value });
	};

	// Add a new counter item
	const addCounterItem = () => {
		const newCounter = [...counter, { heading: '', paragraph: '' }];
		setAttributes({ counter: newCounter });
	};

	// Update counter items
	const updateCounterItem = (index, key, value) => {
		const updatedCounter = [...counter];
		updatedCounter[index][key] = value;
		setAttributes({ counter: updatedCounter });
	};

	// Remove a counter item
	const removeCounterItem = (index) => {
		const updatedCounter = [...counter];
		updatedCounter.splice(index, 1);
		setAttributes({ counter: updatedCounter });
	};

	return (
		<>
			<InspectorControls>
				{/* Base Settings Panel */}
				<PanelBody title="Base Settings" initialOpen={true}>
					<PanelRow>
						<TextControl
							label="Tag"
							value={tag}
							onChange={(value) => updateBaseAttribute('tag', value)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Heading"
							value={heading}
							onChange={(value) => updateBaseAttribute('heading', value)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Paragraph"
							value={paragraph}
							onChange={(value) => updateBaseAttribute('paragraph', value)}
						/>
					</PanelRow>
				</PanelBody>

				{/* Counter Loop Panel */}
				<PanelBody title="Counter Loop" initialOpen={false}>
					{counter.map((item, index) => (
						<div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
							<PanelRow>
								<TextControl
									label={`Counter ${index + 1} Heading`}
									value={item.heading}
									onChange={(value) => updateCounterItem(index, 'heading', value)}
								/>
							</PanelRow>
							<PanelRow>
								<TextareaControl
									label={`Counter ${index + 1} Paragraph`}
									value={item.paragraph}
									onChange={(value) => updateCounterItem(index, 'paragraph', value)}
								/>
							</PanelRow>
							<PanelRow>
								<IconButton
									icon="trash"
									label="Remove Counter"
									onClick={() => removeCounterItem(index)}
									isDestructive
								/>
							</PanelRow>
						</div>
					))}
					<Button isPrimary onClick={addCounterItem}>
						Add Counter
					</Button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="steps-section">
				<header>
					<p className='tag'>{tag}</p>
					<h2>{heading}</h2>
					<p>{paragraph}</p>
				</header>
				<div className='wrapper'>
					{counter.map((item, index) => (
						<div key={index} className='item-wrapper'>
							<h2>0{index + 1} {item.heading}</h2>
							<p className={`counter-content ${index % 2 == 0 ? 'green' : 'white'}`}>{item.paragraph}</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
