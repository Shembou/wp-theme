import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from 'react';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { table_of_contents = [] } = attributes;

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

		return blocks.flatMap((block) => {
			if (block.name === 'create-block/privacy-policy-template' && block.innerBlocks) {
				return block.innerBlocks
					.filter((innerBlock) => innerBlock.name === 'core/heading')
					.map((heading) => heading.attributes.anchor || heading.attributes.content?.toLowerCase().replace(/\s+/g, '-'));
			}
			return [];
		});
	};

	const blocks = useSelect((select) => select('core/block-editor').getBlocks(), []);

	useEffect(() => {
		const newTOC = generateTOC(blocks);
		// Update attributes only if the TOC has changed
		if (JSON.stringify(newTOC) !== JSON.stringify(table_of_contents)) {
			setAttributes({ table_of_contents: newTOC });
		}
	}, [blocks, table_of_contents, setAttributes]);

	return (
		<section {...useBlockProps()} id="privacy-policy-section">
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

			<div className="post-content">
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
			</div>
		</section>
	);
}
