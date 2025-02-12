/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import CustomButton from "../../../common/CustomButton";

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
		heading = "",
		paragraph = "",
		button = {
			url: "",
			text: "",
			svg: "",
			svg_alt,
		},
		image = "",
		image_alt = "",
	} = attributes;
	return (
		<section {...useBlockProps.save()} id="hero-contact-section">
			<div className="wrapper">
				<header>
					<h1>{heading}</h1>
					<p>{paragraph}</p>
					<CustomButton {...button}>
						{button.text}
						<img src={button.svg} alt={button.svg_alt} />
					</CustomButton>
				</header>
				<img src={image} alt={image_alt} className="big-icon" />
			</div>
		</section>
	);
}
