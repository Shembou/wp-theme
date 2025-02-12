export default async function fetchButtonSvg(media, setAttributes, button) {
  if (media && media.url) {
    try {
      const response = await fetch(media.url);
      const response_alt = await fetch(media.alt);
      const svgContent = await response.text();
      const alt = await response_alt.text();

      if (!setAttributes) {
        return svgContent;
      }

      setAttributes({
        button: {
          ...button,
          svg: svgContent,
          svg_alt: alt
        },
      });
    } catch (error) {
      console.error("Error fetching SVG content:", error);
    }
  }
}
