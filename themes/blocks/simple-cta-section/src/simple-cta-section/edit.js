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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { PanelBody, TextControl, Button, SelectControl } from '@wordpress/components';
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

	const {
		heading = '',
		buttons = []
	} = attributes

	// Function to add a new button
	const addButton = () => {
		const newButtons = [...buttons, { url: '', text: '', buttonType: '', svg: '' }];
		setAttributes({ buttons: newButtons });
	};

	// Function to remove a button
	const removeButton = (index) => {
		const newButtons = buttons.filter((_, i) => i !== index); // Remove button at the specified index
		setAttributes({ buttons: newButtons });
	};

	// Function to update a button's properties
	const updateButton = (index, field, value) => {
		const newButtons = [...buttons];
		newButtons[index] = {
			...newButtons[index],
			[field]: value
		};
		setAttributes({ buttons: newButtons });
	};

	const renderButtonControls = () => (
		<div>
			{buttons.map((button, index) => (
				<div key={index} style={{ marginBottom: '10px' }}>
					<TextControl
						label={__('Button Url', 'simple-cta-section')}
						value={button.url || ''}
						onChange={(value) => updateButton(index, 'url', value)}
					/>
					<TextControl
						label={__('Button Text', 'simple-cta-section')}
						value={button.text || ''}
						onChange={(value) => updateButton(index, 'text', value)}
					/>
					<SelectControl
						label={__('Button Type', 'simple-cta-section')}
						value={button.buttonType || ''}
						options={[
							{ label: 'Primary', value: 'primary' },
							{ label: 'Secondary', value: 'secondary' },
						]}
						onChange={(value) => updateButton(index, 'buttonType', value)}
					/>
					<MediaUpload
						onSelect={(media) => updateButton(index, 'svg', media.url)}
						allowedTypes={['image']}
						render={({ open }) => (
							<div>
								<Button onClick={open} variant="secondary">
									{button.svg
										? __('Replace Svg', 'simple-cta-section')
										: __('Upload Svg', 'simple-cta-section')}
								</Button>
								{button.svg && (
									<div style={{ marginTop: '10px', alignItems: 'center', display: 'grid' }}>
										<img
											src={button.svg}
											alt={__('Button Svg', 'simple-cta-section')}
											style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
										/>
										<Button
											onClick={() => updateButton(index, 'svg', '')}
											variant="link"
											isDestructive
										>
											{__('Remove Svg', 'simple-cta-section')}
										</Button>
									</div>
								)}
							</div>
						)}
					/>
					<Button
						isDestructive
						isSmall
						onClick={() => removeButton(index)}
					>
						{__('Remove Button', 'simple-cta-section')}
					</Button>
				</div>
			))}
			<Button
				isPrimary
				onClick={addButton}
				style={{ marginTop: '10px' }}
			>
				{__('Add Button', 'simple-cta-section')}
			</Button>
		</div>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Component Settings', 'simple-cta-section')}>
					<TextControl
						label={__('Heading', 'tiles-section')}
						value={heading || ''}
						onChange={(value) => setAttributes({ heading: value })}
					/>
					{renderButtonControls()}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} id="simple-cta-section">
				<h2>{heading}</h2>
				<div className="buttons-wrapper">
					{buttons.map((button, index) => (
						<CustomButton {...button} key={index} className={button.buttonType}>
							<>
								{button.text}
								<img src={button.svg} />
							</>
						</CustomButton>
					))}
				</div>
			</div>
		</>
	);
}
