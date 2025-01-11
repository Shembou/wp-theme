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
export default function save({attributes}) {
	const {
		heading = '',
		paragraph = '',
		tiles = [],
	} = attributes

	let tileCounter = 0;

	return (
		<div {...useBlockProps.save()} id="tiles-section">
			<>
				<header>
					<h2>{heading}</h2>
					<p>{paragraph}</p>
				</header>
				{tiles.map((tile, index) => {
					if (tile.image !== '') {
						return <img src={tile.image} key={index} />;
					} else {
						tileCounter++;
						return (
							<div className='tile' key={index}>
								<h3>{String(tileCounter).padStart(2, '0')}</h3>
								<h3>{tile.heading}</h3>
								<p>{tile.paragraph}</p>
							</div>
						);
					}
				})}
			</>
		</div>
	);
}
