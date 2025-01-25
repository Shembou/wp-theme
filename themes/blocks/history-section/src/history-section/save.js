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
		tag,
		history_showcase
	} = attributes;

	return (
		<section {...useBlockProps.save()} id="history-section">
			<header>
				{tag}
			</header>
			<div className='animation-wrapper'>
				{history_showcase && history_showcase.map(({ heading, paragraph, year }, index) => (
					<div className={`wrapper`} key={index}>
						{index == 1 &&
							<div className='arrow-left'>
								<p className='year-top'>{year} r.</p>
								{history_showcase[2] && <p className='year-bottom'>{history_showcase[2].year} r,</p>}
								<ArrowLeft />
							</div>
						}
						<h2>{heading}</h2>
						<p>{paragraph}</p>
						{index == 0 &&
							<div className='arrow-right'>
								<p>{year} r.</p>
								<ArrowRight />
							</div>
						}
					</div>
				))}
			</div>
		</section>
	);
}

const ArrowRight = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="621"
		height="174"
		fill="none"
		viewBox="0 0 621 174"
	>
		<path
			fill="#B9DAE5"
			d="M.667 6a5.333 5.333 0 1 0 10.666 0A5.333 5.333 0 0 0 .667 6m362.626 159.793a1 1 0 0 0 0 1.414l6.364 6.364a.999.999 0 1 0 1.414-1.414l-5.657-5.657 5.657-5.657a.999.999 0 1 0-1.414-1.414zM6 7h533.25V5H6zm533.25 158.5H364v2h175.25zm79.25-79.25c0 43.769-35.481 79.25-79.25 79.25v2c44.873 0 81.25-36.377 81.25-81.25zM539.25 7c43.769 0 79.25 35.481 79.25 79.25h2C620.5 41.377 584.123 5 539.25 5z"
		></path>
	</svg>
);

const ArrowLeft = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="630"
		height="202"
		fill="none"
		viewBox="0 0 630 202"
	>
		<path
			fill="#B9DAE5"
			d="M313.333 6a5.333 5.333 0 1 1-10.666 0 5.333 5.333 0 1 1 10.666 0m315.874 187.793a1 1 0 0 1 0 1.414l-6.364 6.364a.999.999 0 1 1-1.414-1.414l5.657-5.657-5.657-5.657a.999.999 0 1 1 1.414-1.414zM308 7H95.25V5H308zM95.25 193.5H628.5v2H95.25zM2 100.25c0 51.501 41.75 93.25 93.25 93.25v2C42.645 195.5 0 152.855 0 100.25zM95.25 7C43.75 7 2 48.75 2 100.25H0C0 47.645 42.645 5 95.25 5z"
		></path>
	</svg>
);