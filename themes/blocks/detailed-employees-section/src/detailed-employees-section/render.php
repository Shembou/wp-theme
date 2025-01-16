<?php
$employees = $attributes['employees'] ?? [];
$limit = isset($attributes['limit']) ? intval($attributes['limit']) : 2;
$currentLimit = $limit;
?>

<section <?php echo get_block_wrapper_attributes(); ?> id="detailed-employees-section">
    <?php foreach (array_slice($employees, 0, $currentLimit) as $index => $employee): ?>
        <div class="employee-wrapper <?php echo $index % 2 ? 'odd' : 'even'; ?>">
            <?php if (!empty($employee['image'])): ?>
                <img src="<?php echo esc_url($employee['image']); ?>" alt="<?php echo esc_attr($employee['heading'] ?? ''); ?>" />
            <?php endif; ?>
            <div class="description-wrapper">
                <?php if (!empty($employee['heading'])): ?>
                    <h2><?php echo esc_html($employee['heading']); ?></h2>
                <?php endif; ?>
                <?php if (!empty($employee['tags'])): ?>
                    <div class="tags-wrapper">
                        <?php foreach ($employee['tags'] as $tag): ?>
                            <p class="tag"><?php echo esc_html($tag); ?></p>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
                <?php if (!empty($employee['paragraph'])): ?>
                    <div class="paragraph"><?php echo wp_kses_post($employee['paragraph']); ?></div>
                <?php endif; ?>
                <?php if (!empty($employee['link'])): ?>
                    <a href="<?php echo esc_url($employee['link']); ?>" class="button">
                        Dowiedz się więcej
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
                            <path fill="#00A6E0" d="M12.988 8.332 8.769 12.55a.47.47 0 0 1-.663-.663l3.419-3.418H2.344a.469.469 0 0 1 0-.938h9.18L8.107 4.113a.469.469 0 1 1 .663-.663l4.219 4.218a.47.47 0 0 1 0 .664"></path>
                        </svg>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    <?php endforeach; ?>

    <?php if ($currentLimit < count($employees)): ?>
        <div class="tooltip-wrapper" style="--currentPercentile:<?php echo intval(($currentLimit / count($employees)) * 100); ?>%">
            <div class="tooltip">
                <p><?php echo $currentLimit; ?> / <?php echo count($employees); ?></p>
            </div>
            <div class="progress-bar-wrapper">
                <div></div>
            </div>
            <div class="text">
                <button class="load-more" onClick="incrementLimit()">
                    Zobacz innych specjalistów
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" fill="none" viewBox="0 0 9 13">
                        <path stroke="#1A4553" stroke-linecap="round" stroke-linejoin="round" d="M4.5 1.152v10.667m0 0 4-4m-4 4-4-4"></path>
                    </svg>
                </button>
            </div>
        </div>
    <?php endif; ?>
</section>

<script>
    function incrementLimit() {
    <?php $currentLimit = $currentLimit + $limit ?>
}
</script>