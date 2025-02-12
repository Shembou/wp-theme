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
import {
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
} from '@wordpress/components';

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
		paragraph = '',
		contact = {
			heading: '',
			phone: '',
			email: '',
		},
		openWeekHours = {
			startDate: '',
			endDate: '',
		},
		openWeekendHours = {
			startDate: '',
			endDate: '',
		},
		faq = []
	} = attributes

	const updateContact = (key, value) => {
		setAttributes({
			contact: {
				...contact,
				[key]: value,
			},
		});
	};

	const updateOpenHours = (type, key, value) => {
		setAttributes({
			[type]: {
				...attributes[type],
				[key]: value,
			},
		});
	};

	const updateFaqItem = (index, key, value) => {
		const updatedFaq = [...faq];
		updatedFaq[index] = {
			...updatedFaq[index],
			[key]: value,
		};
		setAttributes({ faq: updatedFaq });
	};

	const addFaqItem = () => {
		setAttributes({
			faq: [...faq, { heading: '', paragraph: '' }],
		});
	};

	const removeFaqItem = (index) => {
		const updatedFaq = [...faq];
		updatedFaq.splice(index, 1);
		setAttributes({ faq: updatedFaq });
	};

	const copyText = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<InspectorControls>
				{/* General Settings */}
				<PanelBody title={__('General Settings', 'faq-section')}>
					<PanelRow>
						<TextControl
							label={__('Tag', 'faq-section')}
							value={tag || ''}
							onChange={(value) => setAttributes({ tag: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Heading', 'faq-section')}
							value={heading || ''}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</PanelRow>
					<PanelRow>
						<TextareaControl
							label={__('Paragraph', 'faq-section')}
							value={paragraph || ''}
							onChange={(value) => setAttributes({ paragraph: value })}
						/>
					</PanelRow>
				</PanelBody>

				{/* Contact Settings */}
				<PanelBody title={__('Contact Information', 'faq-section')} initialOpen={false}>
					<PanelRow>
						<TextControl
							label={__('Contact Heading', 'faq-section')}
							value={contact.heading || ''}
							onChange={(value) => updateContact('heading', value)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Phone', 'faq-section')}
							value={contact.phone || ''}
							onChange={(value) => updateContact('phone', value)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Email', 'faq-section')}
							value={contact.email || ''}
							onChange={(value) => updateContact('email', value)}
						/>
					</PanelRow>
				</PanelBody>

				{/* Week Hours */}
				<PanelBody title={__('Week Hours', 'faq-section')} initialOpen={false}>
					<PanelRow>
						<TextControl
							label={__('Start Date', 'faq-section')}
							value={openWeekHours.startDate || ''}
							onChange={(value) => updateOpenHours('openWeekHours', 'startDate', value)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('End Date', 'faq-section')}
							value={openWeekHours.endDate || ''}
							onChange={(value) => updateOpenHours('openWeekHours', 'endDate', value)}
						/>
					</PanelRow>
				</PanelBody>

				{/* Weekend Hours */}
				<PanelBody title={__('Weekend Hours', 'faq-section')} initialOpen={false}>
					<PanelRow>
						<TextControl
							label={__('Start Date', 'faq-section')}
							value={openWeekendHours.startDate || ''}
							onChange={(value) => updateOpenHours('openWeekendHours', 'startDate', value)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('End Date', 'faq-section')}
							value={openWeekendHours.endDate || ''}
							onChange={(value) => updateOpenHours('openWeekendHours', 'endDate', value)}
						/>
					</PanelRow>
				</PanelBody>

				{/* FAQ Settings */}
				<PanelBody title={__('FAQ Items', 'faq-section')} initialOpen={false}>
					{faq.map((item, index) => (
						<React.Fragment key={index}>
							<PanelRow>
								<TextControl
									label={__('FAQ Heading', 'faq-section')}
									value={item.heading}
									onChange={(value) => updateFaqItem(index, 'heading', value)}
								/>
							</PanelRow>
							<PanelRow>
								<TextareaControl
									label={__('FAQ Paragraph', 'faq-section')}
									value={item.paragraph}
									onChange={(value) => updateFaqItem(index, 'paragraph', value)}
								/>
							</PanelRow>
							<button
								onClick={() => removeFaqItem(index)}
								style={{ margin: '10px 0', color: 'red' }}
							>
								{__('Remove FAQ Item', 'faq-section')}
							</button>
						</React.Fragment>
					))}
					<button onClick={addFaqItem} style={{ margin: '10px 0' }}>
						{__('Add FAQ Item', 'faq-section')}
					</button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id='faq-section'>
				<div className='content-wrapper'>
					<header>
						<p className='tag'>{tag}</p>
						<h2>{heading}</h2>
						<p>{paragraph}</p>
					</header>
					<div className="contact-info">
						<h3>{contact.heading}</h3>
						<div className='info-wrapper'>
							<span className='phone-info info'>
								<ContactIcon />
								<p>
									{contact.phone}
								</p>
								<button onClick={() => copyText(contact.phone)} className='copy-button'>
									skopiuj
								</button>
							</span>
							<span className='mail-info info'>
								<EmailIcon />
								<p>
									{contact.email}
								</p>
								<button onClick={() => copyText(contact.email)} className='copy-button'>
									skopiuj
								</button>
							</span>
						</div>
					</div>
					<div className='open-hours'>
						<h2>Godziny otwarcia:</h2>
						<div className='hours-info-wrapper'>
							<div>
								<ClockIcon />
								<span className="week-hours">
									<p>Pon - Pt {openWeekHours.startDate} - {openWeekHours.endDate}</p>
								</span>
							</div>
							<div>
								<ClockIcon />
								<span className="weekend-hours">
									<p>Sob {openWeekendHours.startDate} - {openWeekendHours.endDate}</p>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='faq-wrapper'>
					{faq.map((item, index) => (
						<details name='faq' key={index}>
							<summary>{item.heading}</summary>
							<p>{item.paragraph}</p>
						</details>
					))}
				</div>
			</section>
		</>
	);
}


const ContactIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 16 16"
		className='icon'
		alt="Phone Icon"
	>
		<path
			fill="#1A4553"
			d="M9.017 2.87a.5.5 0 0 1 .612-.353 5.39 5.39 0 0 1 3.854 3.854.5.5 0 1 1-.966.258A4.4 4.4 0 0 0 9.37 3.483a.5.5 0 0 1-.354-.613M8.87 5.483c.862.23 1.416.784 1.646 1.646a.5.5 0 1 0 .966-.258c-.32-1.198-1.156-2.034-2.354-2.354a.5.5 0 1 0-.258.966m5.121 5.96A3.516 3.516 0 0 1 10.5 14.5c-4.962 0-9-4.038-9-9a3.516 3.516 0 0 1 3.058-3.493 1 1 0 0 1 1.038.595l1.32 2.947v.008a1 1 0 0 1-.115.991L5.5 8.091c.468.95 1.463 1.937 2.427 2.406l1.521-1.294.047-.035a1 1 0 0 1 .948-.087l.008.003 2.945 1.32a1 1 0 0 1 .596 1.038M13 11.316h-.007l-2.937-1.315-1.522 1.294-.046.035a1 1 0 0 1-.985.071C6.333 10.837 5.166 9.68 4.6 8.521a1 1 0 0 1 .099-1.03L6 5.947 4.688 3.009v-.007A2.51 2.51 0 0 0 2.5 5.5a8.01 8.01 0 0 0 8 8 2.51 2.51 0 0 0 2.5-2.183"
		></path>
	</svg>
)

const EmailIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 16 16"
		className='icon'
		alt="Email Icon"
	>
		<path
			fill="#1A4553"
			d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3M8 8.322 3.286 4h9.428zM6.17 8 2.5 11.363V4.637zm.74.678.75.69a.5.5 0 0 0 .676 0l.75-.69L12.71 12H3.286zM9.83 8l3.67-3.364v6.728z"
		></path>
	</svg>
);

const ClockIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 16 16"
		className='icon'
		alt="Clock Icon"
	>
		<path
			fill="#1A4553"
			d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 12A5.5 5.5 0 1 1 13.5 8 5.506 5.506 0 0 1 8 13.5M12 8a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V4.5a.5.5 0 1 1 1 0v3h3a.5.5 0 0 1 .5.5"
		></path>
	</svg>
)