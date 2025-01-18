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
import { PanelBody, Button, TextControl, TextareaControl } from '@wordpress/components';

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
		logo = '',
		employees = []
	} = attributes
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Component Settings', 'employees-hero-section')}>
					{/* Tag */}
					<TextControl
						label={__('Tag', 'employees-hero-section')}
						value={tag || ''}
						onChange={(value) => setAttributes({ tag: value })}
					/>

					{/* Heading */}
					<TextControl
						label={__('Heading', 'employees-hero-section')}
						value={heading || ''}
						onChange={(value) => setAttributes({ heading: value })}
					/>

					{/* Paragraph */}
					<TextareaControl
						label={__('Paragraph', 'employees-hero-section')}
						value={paragraph || ''}
						onChange={(value) => setAttributes({ paragraph: value })}
					/>


					<MediaUpload
						onSelect={(media) =>
							setAttributes({ logo: media.url })
						}
						allowedTypes={['image']}
						render={({ open }) => (
							<>
								<Button onClick={open} variant="secondary">
									{logo
										? __('Replace Logo', 'employees-hero-section')
										: __('Upload Logo', 'employees-hero-section')}
								</Button>
								{logo && (
									<img
										src={logo}
										alt={__('Logo', 'employees-hero-section')}
										style={{
											marginTop: '10px',
											maxWidth: '100%',
											border: '1px solid #ccc',
										}}
									/>
								)}
							</>
						)}
					/>

					{/* Employees Array */}
					{employees.map((employee, index) => (
						<div key={index} style={{ marginBottom: '20px' }}>
							<MediaUpload
								onSelect={(media) => {
									const newEmployees = [...employees];
									newEmployees[index] = media.url;
									setAttributes({ employees: newEmployees });
								}}
								allowedTypes={['image']}
								render={({ open }) => (
									<>
										<Button onClick={open} variant="secondary">
											{employee
												? __('Replace Image', 'employees-hero-section')
												: __('Upload Image', 'employees-hero-section')}
										</Button>
										{employee && (
											<img
												src={employee}
												alt={__('Employee Image', 'employees-hero-section')}
												style={{
													marginTop: '10px',
													maxWidth: '100%',
													border: '1px solid #ccc',
												}}
											/>
										)}
									</>
								)}
							/>
							<Button
								isDestructive
								isSmall
								style={{ marginTop: '10px' }}
								onClick={() => {
									const newEmployees = employees.filter((_, i) => i !== index);
									setAttributes({ employees: newEmployees });
								}}
							>
								{__('Remove Employee', 'employees-hero-section')}
							</Button>
						</div>
					))}
					<Button
						isPrimary
						style={{ marginTop: '10px' }}
						onClick={() =>
							setAttributes({
								employees: [...employees, ''], // Add an empty string for the new image
							})
						}
					>
						{__('Add Employee', 'employees-hero-section')}
					</Button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="employees-hero-section">
				<div className='section-wrapper'>
					<div className='wrapper'>
						<p className='tag'>{tag}</p>
						<div>
							<h2>{heading}</h2>
							<p>{paragraph}</p>
						</div>
					</div>
					<div className="elipses">
						<span className='circle-left' />
						<span className='circle-top' />
						<span className='circle-right' />
						<span className='circle-bottom' />
						<img src={logo} className="logo" alt="Central Logo" />
						<div className="employee-container">
							{employees.map((employee, index) => (
								<img src={employee} key={index} className="employee-image" alt={`Employee ${index + 1}`} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
