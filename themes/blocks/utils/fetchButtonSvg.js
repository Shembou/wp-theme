export default async function fetchButtonSvg(media, setAttributes, button) {
    if (media && media.url) {
        try {
            const response = await fetch(media.url);
            const svgContent = await response.text();

            setAttributes({
                button: {
                    ...button,
                    svg: svgContent,
                },
            });
        } catch (error) {
            console.error("Error fetching SVG content:", error);
        }
    }
}