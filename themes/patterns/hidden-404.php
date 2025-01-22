<?php
/**
 * Title: 404
 * Slug: twentytwentyfive/hidden-404
 * Inserter: no
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since Twenty Twenty-Five 1.0
 */
?>
<!-- wp:group {"style":{"spacing":{"padding":{"right":"0","left":"0"},"height":"100vh"}},"layout":{"type":"flex","verticalAlignment":"center","justifyContent":"center"}} -->
<div class="wp-block-group" style="padding-right:0;padding-left:0;height:100vh;display:flex;align-items:center;justify-content:center;">
    <!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"var:preset|spacing|50"},"textAlign":"center"}} -->
    <div class="wp-block-group alignfull" style="text-align:center;">
        <!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"48px"}}} -->
        <h1 class="wp-block-heading" style="font-size:48px;">404, Nie znaleziono strony</h1>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"20px"}}} -->
        <p style="font-size:20px;">Strona, której szukasz, nie istnieje.</p>
        <!-- /wp:paragraph -->
        <!-- wp:buttons {"align":"center"} -->
        <div class="wp-block-buttons" style="display:flex; justify-content:center;">
            <!-- wp:button {"style":{"border":{"radius":"4px"},"spacing":{"padding":{"top":"10px","right":"20px","bottom":"10px","left":"20px"}}}} -->
            <div class="wp-block-button">
                <a class="wp-block-button__link" href="<?php echo esc_url( home_url() ); ?>" style="border-radius:4px; padding:10px 20px;">idź do strony głównej</a>
            </div>
            <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->
