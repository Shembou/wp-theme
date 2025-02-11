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
		heading = '',
		values = []
	} = attributes

	let scrollingRowCounter = 0;
	let scrollingRowReverseCounter = 0;


	return (
		<section {...useBlockProps.save()} id="values-section">
			<h2 className="heading">{heading}</h2>
			<div className='scrolling-container'>
				<div className="scrolling-row">
					{values.map((value, index) => {
						if (index % 2 === 0) {
							scrollingRowCounter++;
							return (
								<div key={index} className={`value-item ${scrollingRowCounter % 2 == 0 && 'green'}`}>
									{value.icon && <img src={value.icon} alt={value.icon_alt} className="value-icon" />}
									<span className="value-text">{value.text}</span>
								</div>
							);
						}
						return null; // Skip odd indices
					})}
				</div>
				<div className="scrolling-row reverse">
					{values.map((value, index) => {
						if (index % 2 !== 0) {
							scrollingRowReverseCounter++;
							return (
								<div key={index} className={`value-item ${scrollingRowReverseCounter % 2 == 0 && 'green'}`}>
									{value.icon && <img src={value.icon} alt={value.icon_alt} className="value-icon" />}
									<span className="value-text">{value.text}</span>
								</div>
							);
						}
						return null; // Skip even indices
					})}
				</div>
			</div>
		</section>
	);
}
