/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

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
		selected_categories = [],
		post_date,
		reading_time,
		table_of_contents,
		featured_image,
		featured_image_alt,
		title,
	} = attributes;
	return (
		<section {...useBlockProps.save()} id="blog-template">
			<div className="toc-container">
				<div className="post-meta">
					<span className="post-date">
						{attributes.post_date &&
							new Intl.DateTimeFormat("pl-PL", {
								day: "2-digit",
								month: "long",
								year: "numeric",
							}).format(new Date(attributes.post_date))}
					</span>
					<span className="reading-time">
						{attributes.reading_time
							? `${attributes.reading_time} min. czytania`
							: ""}
					</span>
				</div>
				<RichText.Content
					tagName="h1"
					className="post-title"
					value={attributes.title}
				/>
				<img
					src={featured_image}
					alt={featured_image_alt}
					className="featured-image"
				/>
				<div className="selected-categories">
					{selected_categories.map((category, index) => (
						<p key={index} className="tag">
							{category}
						</p>
					))}
				</div>
				{table_of_contents?.length > 0 ? (
					<div className="table-of-contents">
						<h2>Spis treści:</h2>
						{table_of_contents.map((heading, index) => (
							<a href={`#${heading}`} key={index} className="toc-link">
								{heading.replace(/-/g, " ")}
							</a>
						))}
					</div>
				) : (
					<p>Add headings to generate table of contents</p>
				)}
			</div>
			<div className="post-content">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
