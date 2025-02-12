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
	const { cards = [] } = attributes;

	return (
		<section {...useBlockProps.save()} id="cards-section">
			{cards.map((card, index) => {
				const HeaderTag = card.HeaderType;
				return (
					<div
						key={index}
						className={`card ${card.color == "gray" ? "gray" : "blue-green"}`}
					>
						<div className="wrapper">
							<HeaderTag>{card.heading}</HeaderTag>
							<div className="pinsWrapper">
								{card.pins.map((pin, pinIndex) => (
									<p className="pin" key={pinIndex}>
										{pin}
									</p>
								))}
							</div>
						</div>
						<CustomButton {...card.button}>
							<>
								{card.button.text}
								<img src={card.button.svg} alt={card.button.alt} />
							</>
						</CustomButton>
						<img
							className={`corner-image ${index % 2 == 0 ? "even" : "odd"}`}
							src={card.cornerImage}
							alt={card.cornerImage_alt}
						/>
					</div>
				);
			})}
		</section>
	);
}
