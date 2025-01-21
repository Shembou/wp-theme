<?php
/**
 * Twenty Twenty-Five functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since Twenty Twenty-Five 1.0
 */

// Adds theme support for post formats.
if ( ! function_exists( 'twentytwentyfive_post_format_setup' ) ) :
	/**
	 * Adds theme support for post formats.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_post_format_setup() {
		add_theme_support( 'post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video' ) );
	}
endif;
add_action( 'after_setup_theme', 'twentytwentyfive_post_format_setup' );

// Enqueues editor-style.css in the editors.
if ( ! function_exists( 'twentytwentyfive_editor_style' ) ) :
	/**
	 * Enqueues editor-style.css in the editors.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_editor_style() {
		add_editor_style( get_parent_theme_file_uri( 'assets/css/editor-style.css' ) );
	}
endif;
add_action( 'after_setup_theme', 'twentytwentyfive_editor_style' );

// Enqueues style.css on the front.
if ( ! function_exists( 'twentytwentyfive_enqueue_styles' ) ) :
	/**
	 * Enqueues style.css on the front.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_enqueue_styles() {
		wp_enqueue_style(
			'twentytwentyfive-style',
			get_parent_theme_file_uri( 'style.css' ),
			array(),
			wp_get_theme()->get( 'Version' )
		);
	}
endif;
add_action( 'wp_enqueue_scripts', 'twentytwentyfive_enqueue_styles' );

// Registers custom block styles.
if ( ! function_exists( 'twentytwentyfive_block_styles' ) ) :
	/**
	 * Registers custom block styles.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_block_styles() {
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'twentytwentyfive' ),
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_block_styles' );

// Registers pattern categories.
if ( ! function_exists( 'twentytwentyfive_pattern_categories' ) ) :
	/**
	 * Registers pattern categories.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_pattern_categories() {

		register_block_pattern_category(
			'twentytwentyfive_page',
			array(
				'label'       => __( 'Pages', 'twentytwentyfive' ),
				'description' => __( 'A collection of full page layouts.', 'twentytwentyfive' ),
			)
		);

		register_block_pattern_category(
			'twentytwentyfive_post-format',
			array(
				'label'       => __( 'Post formats', 'twentytwentyfive' ),
				'description' => __( 'A collection of post format patterns.', 'twentytwentyfive' ),
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_pattern_categories' );

// Registers block binding sources.
if ( ! function_exists( 'twentytwentyfive_register_block_bindings' ) ) :
	/**
	 * Registers the post format block binding source.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_register_block_bindings() {
		register_block_bindings_source(
			'twentytwentyfive/format',
			array(
				'label'              => _x( 'Post format name', 'Label for the block binding placeholder in the editor', 'twentytwentyfive' ),
				'get_value_callback' => 'twentytwentyfive_format_binding',
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_register_block_bindings' );

// Registers block binding callback function for the post format name.
if ( ! function_exists( 'twentytwentyfive_format_binding' ) ) :
	/**
	 * Callback function for the post format name block binding source.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return string|void Post format name, or nothing if the format is 'standard'.
	 */
	function twentytwentyfive_format_binding() {
		$post_format_slug = get_post_format();

		if ( $post_format_slug && 'standard' !== $post_format_slug ) {
			return get_post_format_string( $post_format_slug );
		}
	}
endif;


//Allow adding svg to site
function allow_svg_upload($mimes) 
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;	
}
add_filter('upload_mimes', 'allow_svg_upload');

//Registers custom blocks
function register_custom_blocks()
{
	register_block_type( dirname(__FILE__) . '/blocks/hero-section/build/hero-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/cards-section/build/cards-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/services-section/build/services-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/cta-section/build/cta-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/tiles-section/build/tiles-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/simple-cta-section/build/simple-cta-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/employees-section/build/employees-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/values-section/build/values-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/cta-with-bg/build/cta-with-bg/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/faq-section/build/faq-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/stacked-images-section/build/stacked-images-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/steps-section/build/steps-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/header-with-icons/build/header-with-icons/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/enumerated-tiles-section/build/enumerated-tiles-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/minimalistic-hero-section/build/minimalistic-hero-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/tags-section/build/tags-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/detailed-employees-section/build/detailed-employees-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/hero-contact-section/build/hero-contact-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/employees-hero-section/build/employees-hero-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/history-section/build/history-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/blog-template/build/blog-template/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/blog-reference-section/build/blog-reference-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/simple-hero-section/build/simple-hero-section/block.json');
	register_block_type( dirname(__FILE__) . '/blocks/latest-blog-entries-section/build/latest-blog-entries-section/block.json');
}
add_action('init', 'register_custom_blocks');

require_once get_template_directory() . '/inc/class-tgm-plugin-activation.php';

function theme_register_required_plugins() {
    // Array of plugin arrays
    $plugins = array(
        // Example: Newsletter
        array(
            'name'               => 'Newsletter', // Plugin name
            'slug'               => 'newsletter', // Plugin slug (the plugin directory name)
            'required'           => true, // Set to true to make this plugin required
            'version'            => '', // Specify version if you need a specific one
            'force_activation'   => true, // Automatically activate the plugin
            'force_deactivation' => false, // Don't deactivate the plugin if already activated
			'external_url'       => '',
        ),
        // You can add more plugins in the same format if needed
    );

    // Call to action hook to register the plugins
    tgmpa($plugins);
}

// Hook into the 'tgmpa_register' action to register the required plugins
add_action('tgmpa_register', 'theme_register_required_plugins');

add_action( 'save_post', 'save_blog_post_callback' );

function save_blog_post_callback( $post_id ) {

    // verify post is not a revision
    if ( ! wp_is_post_revision( $post_id ) ) {

        // unhook this function to prevent infinite looping
        remove_action( 'save_post', 'save_blog_post_callback' );

		$post_title = get_post_field('post_title', $post_id);

		$slug = sanitize_title_with_dashes($post_title);

        // update the post slug
        wp_update_post( array(
            'ID' => $post_id,
            'post_name' => $slug // do your thing here
        ));

        // re-hook this function
        add_action( 'save_post', 'save_blog_post_callback' );

    }
}

function set_custom_width() {
    add_theme_support('align-wide');
    
    // Set maximum content width
    if (!isset($content_width)) {
        $content_width = 1400;
    }
}
add_action('after_setup_theme', 'set_custom_width');

function custom_gutenberg_width() {
    echo '
    <style>
        .wp-block {
            max-width: 1400px;
        }
        .editor-styles-wrapper .wp-block {
            max-width: 1400px;
        }
        .editor-writing-flow {
            max-width: 1400px;
        }
        .wp-block[data-align="wide"] {
            max-width: 1400px;
        }
        .editor-styles-wrapper .wp-block[data-align="wide"] {
            max-width: 1400px;
        }
    </style>
    ';
}
add_action('admin_head', 'custom_gutenberg_width');

add_theme_support('post-thumbnails');