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
		employees,
		limit
	} = attributes;

	return (
		<section {...useBlockProps.save()} id="detailed-employees-section">
			{employees.map(({ image, heading, tags, paragraph, link }, index) => (
				<div
					className={`employee-wrapper ${index % 2 ? 'odd' : 'even'}`}
					key={index}
					style={{ display: (index + 1) > limit ? 'none' : '' }}>
					<img src={image} />
					<div className="description-wrapper">
						<h2>{heading}</h2>
						<div className="tags-wrapper">
							{tags.map((tag, tagIndex) => (
								<p className="tag" key={tagIndex}>
									{tag}
								</p>
							))}
						</div>
						{paragraph && <div dangerouslySetInnerHTML={{ __html: paragraph }} className="paragraph" />}
						<a href={link} className="button">Dowiedz się więcej <ArrowRight /></a>
					</div>
				</div>
			))}
			{parseInt(limit) < employees.length && (
				<div className="tooltip-wrapper"
					style={{ '--currentPercentile': `${parseInt((limit / employees.length) * 100)}%` }}>
					<div className="tooltip">
						<p>{limit} / {employees.length}</p>
					</div>
					<div className="progress-bar-wrapper">
						<div></div>
					</div>
					<div className="text">
						<button className="load-more">Zobacz innych specjalistów <ArrowDown /></button>
					</div>
				</div>
			)}
		</section>
	);
}

const ArrowRight = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="15"
		height="16"
		fill="none"
		viewBox="0 0 15 16"
	>
		<path
			fill="#00A6E0"
			d="M12.988 8.332 8.769 12.55a.47.47 0 0 1-.663-.663l3.419-3.418H2.344a.469.469 0 0 1 0-.938h9.18L8.107 4.113a.469.469 0 1 1 .663-.663l4.219 4.218a.47.47 0 0 1 0 .664"
		></path>
	</svg>
)

const ArrowDown = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="9"
		height="13"
		fill="none"
		viewBox="0 0 9 13"
	>
		<path
			stroke="#1A4553"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.5 1.152v10.667m0 0 4-4m-4 4-4-4"
		></path>
	</svg>
);