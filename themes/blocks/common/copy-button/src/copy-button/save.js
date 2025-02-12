/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

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
	const { text, icon, icon_alt } = attributes;

	const copyText = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<span {...useBlockProps.save()} id="info">
			<img src={icon} alt={icon_alt} />
			<p>{text}</p>
			<button onClick={() => copyText(text)} className="copy-button">
				skopiuj
			</button>
		</span>
	);
}
