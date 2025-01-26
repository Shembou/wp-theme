import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from 'react';
import './editor.scss';

export default function Edit() {
	const [tableOfContents, setTableOfContents] = useState([]);

	const ALLOWED_BLOCKS = [
		'core/paragraph',
		'core/heading',
		'core/image',
		'core/button',
		'core/buttons',
		'core/gallery',
		'core/list'
	];

	const TEMPLATE = [
		['core/heading', { level: 1, placeholder: 'Start writing content' }],
		['core/paragraph', { placeholder: 'Start writing content here...' }]
	];

	const generateTOC = (blocks) => {
		if (!blocks) return [];

		// Look for headings in the innerBlocks of the blog template block
		const headings = blocks
			.filter(block => block.name === 'create-block/blog-template')
			.flatMap(block =>
				block.innerBlocks
					.filter(innerBlock => innerBlock.name === 'core/heading')
					.map(heading =>
						heading.attributes.anchor ||
						heading.attributes.content?.toLowerCase().replace(/\s+/g, '-')
					)
			);

		return headings;
	};

	const { blocks } = useSelect((select) => ({
		blocks: select('core/block-editor').getBlocks()
	}));

	useEffect(() => {
		if (blocks) {
			const toc = generateTOC(blocks);
			setTableOfContents(toc);
		}
	}, [blocks]);

	return (
		<section {...useBlockProps()}>
			{tableOfContents.length > 0 ? (
				<div className='table-of-contents'>
					<div className='contents-wrapper'>
						<h2>{__('Table of Contents')}</h2>
						{tableOfContents.map((heading, index) => (
							<a href={`#${heading}`} key={index} className='toc-link'>
								{heading.replace(/-/g, ' ')}
							</a>
						))}
					</div>
				</div>
			) : (
				<p>{__('Add headings to generate table of contents')}</p>
			)}

			<div className="post-content">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
				/>
			</div>
		</section>
	);
}