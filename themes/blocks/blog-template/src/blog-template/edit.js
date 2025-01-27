import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, SelectControl, TextareaControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect } from 'react';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const {
		selected_categories = [],
		post_date,
		reading_time,
		table_of_contents,
		featured_image,
		title
	} = attributes

	// Get categories separately
	const fetched_categories = useSelect(select =>
		select('core').getEntityRecords('taxonomy', 'category')
	);

	// Calculate reading time based on content
	const calculateReadingTime = (content) => {
		const wordsPerMinute = 200;
		const wordCount = content?.split(/\s+/).length || 0;
		return Math.ceil(wordCount / wordsPerMinute);
	};

	const generateTOC = (blocks) => {
		if (!blocks) return [];

		return blocks.flatMap(block => {
			if (block.name === 'create-block/blog-template' && block.innerBlocks) {
				// Extract only the anchors
				return block.innerBlocks
					.filter(innerBlock => innerBlock.name === 'core/heading') // Filter heading blocks
					.map(heading => heading.attributes.anchor || heading.attributes.content?.toLowerCase().replace(/\s+/g, '-')); // Generate or extract anchor
			}
			return [];
		});
	};

	// Get post and blocks data
	const { post, blocks } = useSelect((select) => ({
		post: select('core/editor').getCurrentPost(),
		blocks: select('core/block-editor').getBlocks()
	}), []);

	useEffect(() => {
		if (post && blocks) {
			setAttributes({
				post_date: post.date || new Date().toISOString(),
				reading_time: calculateReadingTime(post.content),
				table_of_contents: generateTOC(blocks)
			});
		}
	}, [post?.content]);

	const ALLOWED_BLOCKS = [
		'core/paragraph',
		'core/heading',
		'core/image',
		'core/button',
		'core/buttons',
		'core/gallery',
		"core/list"
	];

	const TEMPLATE = [
		['core/heading', { level: 1, placeholder: 'Post Title' }],
		['core/paragraph', { placeholder: 'Start writing your blog post...' }]
	];

	const addCategory = () => {
		setAttributes({
			selected_categories: [...selected_categories, ''], // Add an empty category
		});
	};


	const updateCategory = (value, index) => {
		const updatedCategories = [...selected_categories];
		updatedCategories[index] = value; // Update the specific index
		setAttributes({ selected_categories: updatedCategories });
	};
	const removeCategory = (index) => {
		setAttributes({
			selected_categories: attributes.selected_categories.filter((_, i) => i !== index)
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Post Settings')}>
					{selected_categories.map((category, index) => (
						<PanelRow key={index}>
							<SelectControl
								label={__('Category')}
								value={category}
								options={[
									{ label: __('Select a category'), value: '' },
									...(fetched_categories?.map((cat) => ({
										label: cat.name,
										value: cat.name,
									})) || []),
								]}
								onChange={(value) => updateCategory(value, index)}
							/>
							<Button onClick={() => removeCategory(index)} variant="tertiary" style={{ display: 'grid' }}>
								{__('Remove category')}
							</Button>
						</PanelRow>
					))}
					<Button onClick={addCategory} variant="secondary">
						{__('Add additional category')}
					</Button>
					<PanelRow>
						<MediaUpload
							onSelect={(media) => setAttributes({ featured_image: media.url })}
							allowedTypes={['image']}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="secondary">
										{featured_image
											? __('Replace Image', 'blog-template')
											: __('Upload Image', 'blog-template')}
									</Button>
									{featured_image && (
										<div style={{ marginTop: '10px', alignItems: 'center', display: 'grid' }}>
											<img
												src={featured_image}
												alt={__('Image', 'cta-section')}
												style={{ maxWidth: '100%', border: '1px', padding: '10px' }}
											/>
											<Button
												onSelect={(media) => setAttributes({ featured_image: media.url })}
												variant="link"
												isDestructive
											>
												{__('Remove Image', 'cta-section')}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()} id="blog-template">
				<div className="toc-container">
					<div className='wrapper'>
						<div className="post-meta">
							<span className="post-date">
								{attributes.post_date && new Intl.DateTimeFormat('pl-PL', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(attributes.post_date))}
							</span>
							<span className="reading-time">
								{attributes.reading_time ? `${attributes.reading_time} min. czytania` : ''}
							</span>
						</div>
						<RichText
							tagName="h1"
							className="post-title"
							value={attributes.title}
							onChange={(title) => setAttributes({ title })}
							placeholder={__('Enter post title...')}
						/>
						<img src={featured_image} className='featured-image' />
						<div className='selected-categories'>
							{selected_categories.map((category, index) => (
								<p key={index} className='tag'>{category}</p>
							))}
						</div>
					</div>
					{table_of_contents?.length > 0 ? (
						<div className="table-of-contents">
							<h2>Spis treści:</h2>
							{table_of_contents.map((heading, index) => (
								<a href={`#${heading}`} key={index} className="toc-link">
									{heading.replace(/-/g, ' ')}
								</a>
							))}
						</div>
					) : (
						<p>{__('Add headings to generate table of contents')}</p>
					)}
				</div>
				<div className="post-content">
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
					/>
				</div>
			</section>
		</>
	);
}