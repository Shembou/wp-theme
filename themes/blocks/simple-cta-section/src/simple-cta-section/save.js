/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import CustomButton from '../../../common/CustomButton'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {

	const {
		heading = '',
		buttons = []
	} = attributes

	return (
		<div {...useBlockProps.save()} id="simple-cta-section">
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
	);
}
