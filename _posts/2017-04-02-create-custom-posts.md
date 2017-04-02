---
layout: post
title:  "Create Custom Posts"
date:   2017-04-1 06:10:05 +0200
categories: wordpress
---

To create custom posts in WordPress:

<code>function codex_custom_init() {
    $labels = array(
        'name' => 'Offers',
        'singular_name' => 'Offer',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Offer',
        'edit_item' => 'Edit Offer',
        'new_item' => 'New Offer',
        'all_items' => 'All Offers',
        'view_item' => 'View Offer',
        'search_items' => 'Search Offers',
        'not_found' => 'No offers found',
        'not_found_in_trash' => 'No offers found in Trash',
        'parent_item_colon' => '',
        'menu_name' => 'Offers'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'offer'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => '5',
        'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments')
    );
    register_post_type('offer', $args);
}
add_action('init', 'codex_custom_init');</code>

<p>Show posts of 'post' and 'offer' post types on home page</p>

<code>add_action('pre_get_posts', 'add_my_post_types_to_query');
function add_my_post_types_to_query($query) {
    if (is_home() && $query->is_main_query())
        $query->set('post_type', array('post', 'offer'));
    return $query;
}</code>
