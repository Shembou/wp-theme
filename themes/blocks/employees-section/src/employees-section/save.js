/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import CustomButton from '../../../common/CustomButton';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes}) {

	const {
		tag = '',
		heading = '',
		paragraph = '',
		logo = '',
		button = {
			url: '',
			text: '',
			svg: ''
		},
		employees = []
	} = attributes

	return (
		<section {...useBlockProps.save()} id="employees-section">
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
			<div className='wrapper'>
				<p className='tag'>{tag}</p>
				<div>
					<h2>{heading}</h2>
					<p>{paragraph}</p>
				</div>
				<CustomButton {...button}>
					{button.text}
					<img src={button.svg} />
				</CustomButton>
			</div>
		</section>
	);
}
