import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, __experimentalItemGroup as ItemGroup, __experimentalItem as Item } from '@wordpress/components';
import { useState } from '@wordpress/element';

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
			<section {...useBlockProps()}>
				<p>{__('Block content will appear here.', 'history-section')}</p>
			</section>
		</>
	);
};
