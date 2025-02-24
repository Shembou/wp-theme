<section <?php echo get_block_wrapper_attributes(); ?> id="blog-reference-section">

<?php
if (!function_exists('parse_blog_html')) {
    function parse_blog_html($content) {
        if (empty($content)) {
            return [
                'reading_time' => 0,
                'featured_image' => '',
                'tags' => [],
                'title' => ''
            ];
        }
        // Load content into DOMDocument
        $dom = new DOMDocument();
        @$dom->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        
        // Create xpath object
        $xpath = new DOMXPath($dom);

        // Extract reading time
        $reading_time_node = $xpath->query("//span[contains(@class, 'reading-time')]")->item(0);
        $reading_time_text = $reading_time_node ? $reading_time_node->textContent : '';
        $reading_time = (int) preg_replace('/[^0-9]/', '', $reading_time_text) ?: 1;

        // Extract featured image
        $featured_image_node = $xpath->query("//img[contains(@class, 'featured-image')]")->item(0);
        $featured_image = $featured_image_node ? $featured_image_node->getAttribute('src') : '';

        // Extract tags
        $tags = [];
        $tag_nodes = $xpath->query("//div[contains(@class, 'selected-categories')]//p[contains(@class, 'tag')]");
        foreach ($tag_nodes as $tag) {
            $tags[] = trim($tag->textContent);
        }

        // Extract title
        $title_node = $xpath->query("//h1[contains(@class, 'wp-block-heading')]")->item(0);
        $title = $title_node ? trim($title_node->textContent) : '';

        return [
            'reading_time' => $reading_time,
            'featured_image' => $featured_image,
            'tags' => $tags,
            'title' => $title
        ];
    }
}

// Get attributes
$tag = $attributes['tag'] ?? '';
$heading = $attributes['heading'] ?? '';
$paragraph = $attributes['paragraph'] ?? '';
$posts_per_page_limit = intval($attributes['posts_per_page_limit']) ?: 6;

// Get current page
$current_page = max(1, get_query_var('paged') ?: (get_query_var('page') ?: 1));

// Fetch categories
$categories = get_categories([
    'orderby' => 'name',
    'order' => 'ASC',
    'hide_empty' => true,
]);

// Get the current category from the URL
$category_name = isset($_GET['category_name']) ? sanitize_title($_GET['category_name']) : '';

// Validate the category
$category = get_category_by_slug( $category_name );
if ( $category ) {
    $args['cat'] = $category->term_id;
} else {
    // If the category doesn't exist, don't modify the query
    $category_name = '';
}

// WP_Query arguments
$args = [
    'post_type' => 'post',
    'posts_per_page' => $posts_per_page_limit,
    'paged' => $current_page,
    'orderby' => 'date',
    'order' => 'DESC',
];

// If a category is selected, add the category filter to the query
if ($category_name) {
    $args['category_name'] = $category_name;
}

$query = new WP_Query($args);

$current_category_slug = $category_name; // From the URL parameter
?>

<header>
    <div class="wrapper">
        <p class="tag"><?php echo esc_html($tag); ?></p>
        <h2 class="heading"><?php echo esc_html($heading); ?></h2>
        <p><?php echo esc_html($paragraph); ?></p>
    </div>
	<div class="categories">
		<h3>Kategorie</h3>
		<div class="categories-wrapper">
            <?php foreach ( $categories as $category ) :
                $is_active = ( $category->slug === $current_category_slug ) ? 'active' : '';

                // Determine the link URL
                if ( $is_active ) {
                    // If the category is active, clicking it should reset the filter
                    $category_link = remove_query_arg( 'category_name', get_permalink( get_the_ID() ) );
                } else {
                    // If not active, clicking it should apply the category filter
                    $category_link = add_query_arg( 'category_name', $category->slug, get_permalink( get_the_ID() ) );
                }
            ?>
                <a href="<?php echo esc_url( $category_link ); ?>" class="tag <?php echo $is_active; ?>">
                    <?php echo esc_html( $category->name ); ?>
                </a>
            <?php endforeach; ?>
        </div>
	</div>
</header>

<?php if ($query->have_posts()) : ?>
    <div class="blog-posts-wrapper">
        <?php while ($query->have_posts()) : $query->the_post(); ?>
            <?php $parsed_data = parse_blog_html(get_the_content()); ?>
            <div class="blog-post">
                <div class="image-wrapper">
                    <p class="reading-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none" viewBox="0 0 16 17">
                            <path fill="#324C4D" d="M13 2.344H4.5a2 2 0 0 0-2 2v10.5a.5.5 0 0 0 .5.5h9a.5.5 0 1 0 0-1H3.5a1 1 0 0 1 1-1H13a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5m-5.5 1h3v4.5l-1.2-.9a.5.5 0 0 0-.6 0l-1.2.9zm5 9h-8a2 2 0 0 0-1 .268V4.344a1 1 0 0 1 1-1h2v5.5a.5.5 0 0 0 .8.4L9 7.97l1.7 1.275a.5.5 0 0 0 .8-.4v-5.5h1z"></path>
                        </svg>
                        <?php echo esc_html($parsed_data['reading_time']); ?> min. czytania
                    </p>
                    <?php if ($parsed_data['featured_image']) : ?>
                        <img src="<?php echo esc_url($parsed_data['featured_image']); ?>" alt="" class="featured-image" />
                    <?php endif; ?>
                </div>
                <div class="blog-contents-wrapper">
                    <div class="wrapper">
                        <div class="tags-wrapper">
                            <?php foreach ($parsed_data['tags'] as $tag_name) : ?>
                                <div class="tag"><?php echo esc_html($tag_name); ?></div>
                            <?php endforeach; ?>
                        </div>
                        <h2><?php echo esc_html($parsed_data['title']); ?></h2>
                        <a href="<?php the_permalink(); ?>" class="custom-button">
                            Czytaj dalej
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path fill="#F9FDFF" d="M13 1.5H4.5a2 2 0 0 0-2 2V14a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1H3.5a1 1 0 0 1 1-1H13a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5m-5.5 1h3V7l-1.2-.9a.5.5 0 0 0-.6 0L7.5 7zm5 9h-8c-.351 0-.696.092-1 .268V3.5a1 1 0 0 1 1-1h2V8a.5.5 0 0 0 .8.4L9 7.125 10.7 8.4a.5.5 0 0 0 .8-.4V2.5h1z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
</section>

<?php if ($query->max_num_pages > 1) : ?>
    <div class="pagination">
        <?php
        echo paginate_links([
            'base' => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))) . '#blog-reference-section',
            'format' => '?paged=%#%#blog-reference-section',
            'current' => $current_page,
            'total' => $query->max_num_pages,
            'prev_text' => __('Poprzedni'),
            'next_text' => __('Następny'),
            'type' => 'list',
        ]);
        ?>
    </div>
<?php endif; ?>
<?php endif; ?>

<?php wp_reset_postdata(); ?>
