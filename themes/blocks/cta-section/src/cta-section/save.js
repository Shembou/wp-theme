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
        backgroundImage = '',
        button = {
            text: '',
            url: '',
            svg: '',
        }
    } = attributes

    return (
        <section {...useBlockProps.save()} id="cta-section">
            <h2 style={{ background: `linear-gradient(0deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.70) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat` }} className={'heading'}>{heading}</h2>
            <a href={button.url} className='button-wrapper'>
                <p>{button.text}</p>
                <img className='icon' src={button.svg} />
            </a>
        </section>
    );
}
