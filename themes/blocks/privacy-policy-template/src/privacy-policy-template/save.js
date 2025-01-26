/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
		table_of_contents
	} = attributes

	return (
		<section {...useBlockProps.save()} id="privacy-policy-section">
			{table_of_contents?.length > 0 ? (
				<div className='table-of-contents'>
					<div className='contents-wrapper'>
						<h2>Table of contents</h2>
						{table_of_contents.map((heading, index) => (
							<a href={`#${heading}`} key={index} className='toc-link'>
								{heading.replace(/-/g, ' ')}
							</a>
						))}
					</div>
				</div>
			) : (
				<p>Add headings to generate table of contents</p>
			)}

			<div className="post-content">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
