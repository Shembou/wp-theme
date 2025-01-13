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
import { useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, TextControl, IconButton, PanelRow, Button, TextareaControl } from '@wordpress/components';

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
		image = '',
		description = []
	} = attributes

	const updateBaseAttribute = (key, value) => {
		setAttributes({ [key]: value });
	};

	// Add a new item to the description array
	const addDescriptionItem = () => {
		const newDescription = [...description, { icon: '', header: '', paragraph: '' }];
		setAttributes({ description: newDescription });
	};

	// Update a specific description item
	const updateDescriptionItem = (index, key, value) => {
		const updatedDescription = [...description];
		updatedDescription[index][key] = value;
		setAttributes({ description: updatedDescription });
	};

	// Remove a description item
	const removeDescriptionItem = (index) => {
		const updatedDescription = [...description];
		updatedDescription.splice(index, 1);
		setAttributes({ description: updatedDescription });
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
					<PanelRow>
						<MediaUpload
							onSelect={(media) => updateBaseAttribute('image', media.url)}
							allowedTypes={['image']}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{image
											? __('Replace Image', 'header-with-icons')
											: __('Upload Image', 'header-with-icons')}
									</Button>
									{image && (
										<div style={{ marginTop: '10px', alignItems: 'center', display: 'grid' }}>
											<img
												src={image}
												alt={__('Button Svg', 'header-with-icons')}
												style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
											/>
											<Button
												onClick={() => updateBaseAttribute('image', '')}
												variant="link"
												isDestructive
											>
												{__('Remove Image', 'header-with-icons')}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
				</PanelBody>

				{/* Description Array Panel */}
				<PanelBody title="Description Settings" initialOpen={false}>
					{description.map((item, index) => (
						<div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
							<PanelRow>
								<MediaUpload
									onSelect={(media) => updateDescriptionItem(index, 'icon', media.url)}
									allowedTypes={['image']}
									render={({ open }) => (
										<div>
											<Button onClick={open} variant="secondary">
												{item.icon
													? __('Replace Icon', 'header-with-icons')
													: __('Upload Icon', 'header-with-icons')}
											</Button>
											{item.icon && (
												<div style={{ marginTop: '10px', alignItems: 'center', display: 'grid' }}>
													<img
														src={item.icon}
														alt={__('Button Icon', 'header-with-icons')}
														style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
													/>
													<Button
														onClick={() => updateDescriptionItem(index, 'icon', '')}
														variant="link"
														isDestructive
													>
														{__('Remove Image', 'header-with-icons')}
													</Button>
												</div>
											)}
										</div>
									)}
								/>
							</PanelRow>
							<PanelRow>
								<TextareaControl
									label={`Description ${index + 1} Header`}
									value={item.header}
									onChange={(value) => updateDescriptionItem(index, 'header', value)}
								/>
							</PanelRow>
							<PanelRow>
								<TextareaControl
									label={`Description ${index + 1} Paragraph`}
									value={item.paragraph}
									onChange={(value) => updateDescriptionItem(index, 'paragraph', value)}
								/>
							</PanelRow>
							<PanelRow>
								<IconButton
									icon="trash"
									label="Remove Description"
									onClick={() => removeDescriptionItem(index)}
									isDestructive
								/>
							</PanelRow>
						</div>
					))}
					<Button isPrimary onClick={addDescriptionItem}>
						Add Description
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...useBlockProps()} id="header-with-icons">
				<header>
					<p className='tag'>{tag}</p>
					<h2>{heading}</h2>
					<p>{paragraph}</p>
				</header>
				<div className='content-wrapper'>
					<img src={image} />
					<div className='text-wrapper'>
						{description.map((item, index) => (
							<div className='item-wrapper' key={index}>
								<h2>
									<img src={item.icon} />
									{item.header}
								</h2>
								<p>{item.paragraph}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
