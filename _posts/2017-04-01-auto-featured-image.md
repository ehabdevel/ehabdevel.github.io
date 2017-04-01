---
layout: post
title:  "Auto Featured Image"
date:   2017-04-1 06:10:05 +0200
categories: codes
---

Here is an Auto featured:

<code>
!defined('ABSPATH') and exit;
if (!function_exists('fb_set_featured_image')) {
    add_action('save_post', 'fb_set_featured_image');
    function fb_set_featured_image() {
        if (!isset($GLOBALS['post']->ID)) {
            return NULL;
        }
        if (has_post_thumbnail(get_the_ID())) {
            return NULL;
        }
        $args = array(
            'numberposts' => 1,
            'order' => 'ASC', // DESC for the last image
            'post_mime_type' => 'image',
            'post_parent' => get_the_ID(),
            'post_status' => NULL,
            'post_type' => 'attachment'
        );
        $attached_image = get_children($args);
        if ($attached_image) {
            foreach ($attached_image as $attachment_id => $attachment) {
                set_post_thumbnail(get_the_ID(), $attachment_id);
            }
        }
    }
}?>
</code>
Hope it help...
