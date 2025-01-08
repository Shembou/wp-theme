export default async function fetchCornerImageSvg(media, setAttributes, card) {
    if (media && media.url) {
        try {
            const response = await fetch(media.url);
            const svgContent = await response.text();

            if (!setAttributes) {
                return svgContent
            }

            setAttributes({
                ...card,
                cornerImage: svgContent
            });
        } catch (error) {
            console.error("Error fetching SVG content:", error);
        }
    }
}