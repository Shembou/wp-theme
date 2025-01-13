/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
		tag = '',
		heading = '',
		paragraph = '',
		image = '',
		description = []
	} = attributes
	return (
		<section {...useBlockProps.save()} id="header-with-icons">
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
	);
}
