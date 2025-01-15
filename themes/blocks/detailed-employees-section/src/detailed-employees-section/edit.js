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
import { PanelBody, PanelRow, TextControl, TextareaControl, Button } from '@wordpress/components';
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
		employees = [],
		limit = ''
	} = attributes;


	const updateEmployee = (index, key, value) => {
		const updatedEmployees = [...employees];
		updatedEmployees[index][key] = value;
		setAttributes({ employees: updatedEmployees });
	};

	const addEmployee = () => {
		setAttributes({
			employees: [
				...employees, {
					heading: '',
					tags: [],
					paragraph: '',
					link: '',
					image: ''
				}
			]
		})
	};


	const removeEmployee = (index) => {
		const updatedEmployees = employees.filter((_, i) => i !== index);
		setAttributes({ employees: updatedEmployees });
	};

	const renderTagsControls = (employee, index) => (
		<div>
			{employee.tags.map((tag, tagIndex) => (
				<PanelRow key={tagIndex}>

					<PanelRow />
			))}
				</div>
			)

	return (
			<>
				<InspectorControls>
					{/* Panel for managing the employees array */}
					<PanelBody title="Employees" initialOpen={true}>
						{employees.map((employee, index) => (
							<div style={{ width: '100%' }} key={index}>
								<PanelRow>
									<TextControl
										label={`Heading ${index + 1}`}
										value={employee.heading}
										onChange={(value) => updateEmployee(index, 'heading', value)}
									/>
								</PanelRow>
								<PanelRow>
									<TextareaControl
										label={`Paragraph ${index + 1}`}
										value={employee.paragraph}
										onChange={(value) => updateEmployee(index, 'paragraph', value)}
									/>
								</PanelRow>
								<PanelRow>
									<TextControl
										label={`Link ${index + 1}`}
										value={employee.link}
										onChange={(value) => updateEmployee(index, 'link', value)}
									/>
								</PanelRow>
								<PanelRow>
									<TextControl
										label={`Image ${index + 1}`}
										value={employee.image}
										onChange={(value) => updateEmployee(index, 'image', value)}
									/>
								</PanelRow>
								<PanelRow>
									{renderTagsControls(employee, index)}
								</PanelRow>
								<Button
									isDestructive
									onClick={() => removeEmployee(index)}
								>
									Remove Employee
								</Button>
							</div>
						))}
						<Button
							isPrimary
							onClick={() => addEmployee()}
						>
							Add new employee
						</Button>
					</PanelBody>

					{/* Panel for card limit settings */}
					<PanelBody title="Settings" initialOpen={false}>
						<PanelRow>
							<TextControl
								label="Card Limit"
								type="number"
								value={limit}
								onChange={(value) => setAttributes({ limit: value })}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls >
				<section {...useBlockProps()} id='detailed-employees-section'>
					<div>

					</div>
				</section>
			</>
			);
}
