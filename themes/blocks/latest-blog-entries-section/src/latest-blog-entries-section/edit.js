/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl, TextareaControl } from '@wordpress/components';

import CustomButton from '../../../common/CustomButton';
import parseBlogHTML from '../../../utils/parseBlogHTML';

import { useSelect } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		tag = '',
		heading = '',
		paragraph = ''
	} = attributes

	const posts = useSelect(select =>
		select('core').getEntityRecords('postType', 'post', { per_page: -1 })
	);

	const post_data = posts
		?.sort((a, b) => new Date(b.date) - new Date(a.date))
		.slice(0, 2)
		.map(({ link, content }) => {
			return { link, data: parseBlogHTML(content.rendered) };
		});

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label={__('Tag', 'latest-blog-entries-section')}
							value={tag || ''}
							onChange={(value) => setAttributes({ tag: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Heading', 'latest-blog-entries-section')}
							value={heading || ''}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextareaControl
							label={__('Paragraph', 'latest-blog-entries-section')}
							value={paragraph || ''}
							onChange={(value) => setAttributes({ paragraph: value })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id='latest-blog-entries-section'>
				{post_data && post_data.map(({ link, data }, index) => (
					<div className='blog-post' key={index}>
						<div className="image-wrapper">
							<p className='reading-time'><BookmarkIconBlack /> {data.reading_time} min. czytania</p>
							<img src={data.featured_image} />
						</div>
						<div className='blog-contents-wrapper'>
							<div className='wrapper'>
								<h2>{data.title}</h2>
								<CustomButton url={link}>Czytaj dalej <BookmarkIconWhite /></CustomButton>
							</div>
						</div>
					</div>
				))}
				<header>
					<div className="wrapper">
						<p className='tag'>{tag}</p>
						<h2>{heading}</h2>
						<p>{paragraph}</p>
					</div>
					<CustomButton url="/blog">Przejdź do bloga <BookmarkIconWhite /></CustomButton>
				</header>
			</section>
		</>
	);
}

const BookmarkIconWhite = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path
			fill="#F9FDFF"
			d="M13 1.5H4.5a2 2 0 0 0-2 2V14a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1H3.5a1 1 0 0 1 1-1H13a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5m-5.5 1h3V7l-1.2-.9a.5.5 0 0 0-.6 0L7.5 7zm5 9h-8c-.351 0-.696.092-1 .268V3.5a1 1 0 0 1 1-1h2V8a.5.5 0 0 0 .8.4L9 7.125 10.7 8.4a.5.5 0 0 0 .8-.4V2.5h1z"
		></path>
	</svg>
);

const BookmarkIconBlack = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="17"
		fill="none"
		viewBox="0 0 16 17"
	>
		<path
			fill="#324C4D"
			d="M13 2.344H4.5a2 2 0 0 0-2 2v10.5a.5.5 0 0 0 .5.5h9a.5.5 0 1 0 0-1H3.5a1 1 0 0 1 1-1H13a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5m-5.5 1h3v4.5l-1.2-.9a.5.5 0 0 0-.6 0l-1.2.9zm5 9h-8a2 2 0 0 0-1 .268V4.344a1 1 0 0 1 1-1h2v5.5a.5.5 0 0 0 .8.4L9 7.97l1.7 1.275a.5.5 0 0 0 .8-.4v-5.5h1z"
		></path>
	</svg>
);