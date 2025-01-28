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
		tags,
		tag,
		heading = '',
		paragraph
	} = attributes

	if (heading != '') {
		return (
			<section {...useBlockProps.save()} id='tags-section'>
				{heading != '' && <header>
					<p className='tag'>{tag}</p>
					<h2>{heading}</h2>
					<p>{paragraph}</p>
				</header>
				}
				<div className={`tags ${heading != '' ? 'heading-variant' : ''}`}>
					{tags && tags.map(({ tag, url }, index) => (
						<a className='tag' key={index} href={url}>
							{tag}
						</a>
					))}
				</div>
			</section>
		)
	} else {
		return (
			<section {...useBlockProps.save()} id='tags-section'>
				<div className={`tags `}>
					{tags && tags.map(({ tag, url }, index) => (
						<a className='tag' key={index} href={url}>
							{tag}
						</a>
					))}
				</div>
			</section>
		)
	}
}
