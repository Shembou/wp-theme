import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, __experimentalItemGroup as ItemGroup, __experimentalItem as Item } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const {
		tag = '',
		history_showcase = ''
	} = attributes;

	// Handle updates for the tag
	const handleTagChange = (newTag) => {
		setAttributes({ tag: newTag });
	};

	// Handle updates for the history_showcase array
	const handleHistoryItemChange = (index, key, value) => {
		const newHistoryShowcase = [...(history_showcase || [])];
		newHistoryShowcase[index] = { ...newHistoryShowcase[index], [key]: value };
		setAttributes({ history_showcase: newHistoryShowcase });
	};

	// Add a new item to the history_showcase array
	const addHistoryItem = () => {
		const newHistoryShowcase = [...(history_showcase || []), { heading: '', paragraph: '', year: '' }];
		setAttributes({ history_showcase: newHistoryShowcase });
	};

	// Remove an item from the history_showcase array
	const removeHistoryItem = (index) => {
		const newHistoryShowcase = [...(history_showcase || [])];
		newHistoryShowcase.splice(index, 1);
		setAttributes({ history_showcase: newHistoryShowcase });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'history-section')} initialOpen={true}>
					{/* Tag Setting */}
					<TextControl
						label={__('Tag', 'history-section')}
						value={tag || ''}
						onChange={handleTagChange}
						help={__('Set tag for this block.', 'history-section')}
					/>

					{/* History Showcase Items */}
					<PanelBody title={__('History Showcase', 'history-section')} initialOpen={true}>
						{(history_showcase || []).map((item, index) => (
							<ItemGroup key={index}>
								<Item>
									<TextControl
										label={__('Heading', 'history-section')}
										value={item.heading || ''}
										onChange={(value) => handleHistoryItemChange(index, 'heading', value)}
									/>
									<TextareaControl
										label={__('Paragraph', 'history-section')}
										value={item.paragraph || ''}
										onChange={(value) => handleHistoryItemChange(index, 'paragraph', value)}
									/>
									<TextControl
										label={__('Year', 'history-section')}
										value={item.year || ''}
										onChange={(value) => handleHistoryItemChange(index, 'year', value)}
									/>
									<Button
										isDestructive
										onClick={() => removeHistoryItem(index)}
									>
										{__('Remove Item', 'history-section')}
									</Button>
								</Item>
							</ItemGroup>
						))}
						<Button isPrimary onClick={addHistoryItem}>
							{__('Add New Item', 'history-section')}
						</Button>
					</PanelBody>
				</PanelBody>
			</InspectorControls>

			{/* Block Preview */}
			<section {...useBlockProps()} id="history-section">
				<header>
					{tag}
				</header>
				<div className='animation-wrapper'>
					{history_showcase.map(({ heading, paragraph, year }, index) => (
						<div className={`wrapper`} key={index}>
							{index == 1 &&
								<div className='arrow-left'>
									<p className='year-top'>{year} r.</p>
									<p className='year-bottom'>{history_showcase[2].year} r,</p>
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
		</>
	);
};

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