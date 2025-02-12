/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	MediaUpload,
	RichText,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
import { useState } from "react";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const { employees = [], limit = "2" } = attributes;

	const [currentLimit, setCurrentLimit] = React.useState(parseInt(limit));

	const updateEmployee = (index, key, value) => {
		const updatedEmployees = [...employees];
		updatedEmployees[index][key] = value;
		updatedEmployees;
		setAttributes({ employees: updatedEmployees });
	};

	const updateImage = (index, media) => {
		const updatedEmployees = [...employees];
		updatedEmployees[index] = {
			...updatedEmployees[index], // Correctly spreading the existing object
			image: media.url,
			image_alt: media.alt,
		};

		setAttributes({ employees: updatedEmployees }); // Ensure the state is updated
	};

	const addEmployee = () => {
		setAttributes({
			employees: [
				...employees,
				{
					heading: "",
					tags: [],
					paragraph: "",
					link: "",
					image: "",
					image_alt: "",
				},
			],
		});
	};

	const removeEmployee = (index) => {
		const updatedEmployees = employees.filter((_, i) => i !== index);
		setAttributes({ employees: updatedEmployees });
	};

	const addTag = (employeeIndex) => {
		const updatedEmployees = [...employees]; // Copy the employees array
		const employee = { ...updatedEmployees[employeeIndex] }; // Copy the specific employee
		employee.tags = [...employee.tags, ""]; // Add a new empty tag
		updatedEmployees[employeeIndex] = employee; // Update the employee in the array

		// Update the state with the updated employees array
		setAttributes({
			employees: updatedEmployees, // Set the new employees array
		});
	};

	const updateTag = (tagIndex, employeeIndex, value) => {
		const updatedEmployees = [...employees]; // Copy the employees array
		const employee = { ...updatedEmployees[employeeIndex] }; // Copy the specific employee
		employee.tags = [...employee.tags]; // Copy the tags array
		employee.tags[tagIndex] = value; // Update the specific tag
		updatedEmployees[employeeIndex] = employee; // Update the employee in the array

		// Update the state with the updated employees array
		setAttributes({
			employees: updatedEmployees, // Set the new employees array
		});
	};

	const renderTagsControls = (employee, index) => (
		<div style={{ display: "grid" }}>
			{employee.tags.map((tag, tagIndex) => (
				<div key={tagIndex}>
					<TextControl
						label={`Tag ${tagIndex + 1}`}
						value={tag}
						onChange={(value) => updateTag(tagIndex, index, value)}
					/>
				</div>
			))}
			{/* Add Button */}
			<Button
				isPrimary
				onClick={() => addTag(index)} // Call addTag with the employee index
			>
				Add Tag
			</Button>
		</div>
	);

	return (
		<>
			<InspectorControls>
				{/* Panel for managing the employees array */}
				<PanelBody title="Employees" initialOpen={true}>
					{employees.map((employee, index) => (
						<div style={{ width: "100%" }} key={index}>
							<PanelRow>
								<TextControl
									label={`Heading ${index + 1}`}
									value={employee.heading}
									onChange={(value) => updateEmployee(index, "heading", value)}
								/>
							</PanelRow>
							<PanelRow>
								<RichText
									tagName="p"
									label={`Paragraph ${index + 1}`}
									value={employee.paragraph}
									onChange={(value) =>
										updateEmployee(index, "paragraph", value)
									}
									style={{ border: "1px solid black", width: "100%" }}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={`Link ${index + 1}`}
									value={employee.link}
									onChange={(value) => updateEmployee(index, "link", value)}
								/>
							</PanelRow>
							<PanelRow>
								<MediaUpload
									onSelect={(media) => {
										updateImage(index, media);
									}}
									allowedTypes={["image"]}
									render={({ open }) => (
										<div>
											<Button onClick={open} variant="secondary">
												{employee.image
													? __("Replace Image", "detailed-employees-section")
													: __("Upload Image", "detailed-employees-section")}
											</Button>
											{employee.image && (
												<div
													style={{
														marginTop: "10px",
														alignItems: "center",
														display: "grid",
													}}
												>
													<img
														src={employee.image}
														alt={__("Image", "header-with-icons")}
														style={{
															maxWidth: "100%",
															border: "1px",
															padding: "10px",
														}}
													/>
													<Button
														onClick={() => updateEmployee(index, "image", "")}
														variant="link"
														isDestructive
													>
														{__("Remove Image", "header-with-icons")}
													</Button>
												</div>
											)}
										</div>
									)}
								/>
							</PanelRow>
							<PanelRow>{renderTagsControls(employee, index)}</PanelRow>
							<Button isDestructive onClick={() => removeEmployee(index)}>
								Remove Employee
							</Button>
						</div>
					))}
					<Button isPrimary onClick={() => addEmployee()}>
						Add new employee
					</Button>
				</PanelBody>

				{/* Panel for card limit settings */}
				<PanelBody title="Settings" initialOpen={false}>
					<PanelRow>
						<TextControl
							label="Card Limit"
							value={limit}
							onChange={(value) => {
								const parsedLimit = parseInt(value, 10) || 0;
								setAttributes({ limit: value });
								setCurrentLimit(parsedLimit);
							}}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="detailed-employees-section">
				{employees
					.slice(0, currentLimit)
					.map(
						({ image, heading, tags, paragraph, link, image_alt }, index) => (
							<div
								className={`employee-wrapper ${index % 2 ? "odd" : "even"}`}
								key={index}
							>
								<img src={image} alt={image_alt} />
								<div className="description-wrapper">
									<h2>{heading}</h2>
									<div className="tags-wrapper">
										{tags.map((tag, tagIndex) => (
											<p className="tag" key={tagIndex}>
												{tag}
											</p>
										))}
									</div>
									{paragraph && (
										<div
											dangerouslySetInnerHTML={{ __html: paragraph }}
											className="paragraph"
										/>
									)}
									<a href={link} className="button">
										Dowiedz się więcej <ArrowRight />
									</a>
								</div>
							</div>
						),
					)}

				{currentLimit < employees.length && (
					<div
						className={`tooltip-wrapper`}
						style={{
							"--currentPercentile": `${parseInt(
								(currentLimit / employees.length) * 100,
							)}%`,
						}}
					>
						<div className="tooltip">
							<p>
								{currentLimit} / {employees.length}
							</p>
						</div>

						<div className="progress-bar-wrapper">
							<div />
						</div>

						<div className="text">
							<button
								className="load-more"
								onClick={() => setCurrentLimit(currentLimit + parseInt(limit))}
							>
								Zobacz innych specjalistów <ArrowDown />
							</button>
						</div>
					</div>
				)}
			</section>
		</>
	);
}

const ArrowRight = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="15"
		height="16"
		fill="none"
		viewBox="0 0 15 16"
		alt="Arrow right icon"
	>
		<path
			fill="#00A6E0"
			d="M12.988 8.332 8.769 12.55a.47.47 0 0 1-.663-.663l3.419-3.418H2.344a.469.469 0 0 1 0-.938h9.18L8.107 4.113a.469.469 0 1 1 .663-.663l4.219 4.218a.47.47 0 0 1 0 .664"
		></path>
	</svg>
);

const ArrowDown = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="9"
		height="13"
		fill="none"
		viewBox="0 0 9 13"
		alt="Arrow down icon"
	>
		<path
			stroke="#1A4553"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.5 1.152v10.667m0 0 4-4m-4 4-4-4"
		></path>
	</svg>
);
