/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

import { CustomButton } from '../../../common/CustomButton'

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
		cards = []
	} = attributes

	return (
		<section {...useBlockProps.save()} id="service-section">
			<header>
				<p className="tag">{tag}</p>
				<h2>{heading}</h2>
				<p>{paragraph}</p>
			</header>
			<div className='cards-wrapper'>
				{cards && cards.map((card, index) => (
					<div className={`card-wrapper ${index % 2 == 1 && `additional-wrapper-styles`}`} key={index}>
						<div className='text-wrapper'>
							<h3 className='card-heading'>{card.heading}</h3>
							<p>{card.paragraph}</p>
							<div className={"buttons-wrapper"}>
								{card.buttons && card.buttons.map((button, buttonIndex) => (
									<div className='button-wrapper' key={buttonIndex}>
										<CustomButton url={button.url} className={`${button.buttonType}`}>
											<>
												{button.text}
												<img src={button.svg} />
											</>
										</CustomButton>
									</div>
								))}
							</div>
							<img className={'icon'} src={card.icon} />
						</div>
						<img src={card.image} className='image' />
					</div>
				))}
			</div>
		</section>
	);
}
