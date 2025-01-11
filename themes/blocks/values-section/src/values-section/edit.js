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
		values = []
	} = attributes

	let scrollingRowCounter = 0;
	let scrollingRowReverseCounter = 0;

	// Handler to update the `icon` and `text` for an item in the array
	const updateValueItem = (index, key, value) => {
		const updatedValues = [...values];
		updatedValues[index][key] = value;
		setAttributes({ values: updatedValues });
	};

	// Handler to add a new item to the array
	const addNewValueItem = () => {
		const updatedValues = [...values, { icon: '', text: '' }];
		setAttributes({ values: updatedValues });
	};

	// Handler to remove an item from the array
	const removeValueItem = (index) => {
		const updatedValues = values.filter((_, i) => i !== index);
		setAttributes({ values: updatedValues });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Component Settings', 'values-section')}>
					<TextControl
						label={__('Heading', 'values-section')}
						value={heading || ''}
						onChange={(value) => setAttributes({ heading: value })}
					/>

					{/* Dynamic Controls for Values Array */}
					<div>
						<h4>{__('Values', 'values-section')}</h4>
						{values.map((item, index) => (
							<div key={index} style={{ marginBottom: '16px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>
								<MediaUpload
									onSelect={(media) => updateValueItem(index, 'icon', media.url)}
									allowedTypes={['image']}
									render={({ open }) => (
										<div>
											<Button onClick={open} variant="secondary">
												{item.icon
													? __('Replace Icon', 'values-section')
													: __('Upload Icon', 'values-section')}
											</Button>
											{item.icon && (
												<div style={{ marginTop: '10px', alignItems: 'center', display: 'grid' }}>
													<img
														src={item.icon}
														alt={__('Value Icon', 'values-section')}
														style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
													/>
													<Button
														onSelect={(media) => updateValueItem(index, 'icon', '')}
														variant="link"
														isDestructive
													>
														{__('Remove Icon', 'values-section')}
													</Button>
												</div>
											)}
										</div>
									)}
								/>
								<TextControl
									label={__('Text', 'values-section')}
									value={item.text}
									onChange={(value) => updateValueItem(index, 'text', value)}
								/>
								<Button
									isDestructive
									onClick={() => removeValueItem(index)}
									style={{ marginTop: '8px' }}
								>
									{__('Remove', 'values-section')}
								</Button>
							</div>
						))}
						<Button
							isPrimary
							onClick={addNewValueItem}
							style={{ marginTop: '16px' }}
						>
							{__('Add New Item', 'values-section')}
						</Button>
					</div>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="values-section">
				<h2 className="heading">{heading}</h2>
				<div className='scrolling-container'>
					<div className="scrolling-row">
						{values.map((value, index) => {
							if (index % 2 === 0) {
								scrollingRowCounter++;
								return (
									<div key={index} className={`value-item ${scrollingRowCounter % 2 == 0 && 'green'}`}>
										{value.icon && <img src={value.icon} alt="" className="value-icon" />}
										<span className="value-text">{value.text}</span>
									</div>
								);
							}
							return null; // Skip odd indices
						})}
					</div>
					<div className="scrolling-row reverse">
						{values.map((value, index) => {
							if (index % 2 !== 0) {
								scrollingRowReverseCounter++;
								return (
									<div key={index} className={`value-item ${scrollingRowReverseCounter % 2 == 0 && 'green'}`}>
										{value.icon && <img src={value.icon} alt="" className="value-icon" />}
										<span className="value-text">{value.text}</span>
									</div>
								);
							}
							return null; // Skip even indices
						})}
					</div>
				</div>
			</section>
		</>
	);
}
