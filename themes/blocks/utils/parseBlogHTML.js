export default function parseBlogHTML(htmlString) {
    try {
        // Create a DOM parser
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        // Extract reading time
        const readingTimeText = doc.querySelector('.reading-time')?.textContent || '';
        const readingTime = parseInt(readingTimeText) || 0;

        // Extract featured image
        const featuredImage = doc.querySelector('.featured-image')?.getAttribute('src') || '';

        // Extract tags
        const tags = Array.from(doc.querySelectorAll('.selected-categories .tag'))
            .map(tag => tag.textContent);

        // Extract title
        const title = doc.querySelector('.wp-block-heading')?.textContent || '';

        return {
            reading_time: readingTime,
            featured_image: featuredImage,
            tags: tags,
            title: title
        };
    } catch (error) {
        console.error('Error parsing blog HTML:', error);
        return {
            reading_time: 0,
            featured_image: '',
            tags: [],
            title: '',
            error: error.message
        };
    }
}