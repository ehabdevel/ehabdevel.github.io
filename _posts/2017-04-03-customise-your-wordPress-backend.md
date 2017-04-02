---
layout: post
title:  "Customise your WordPress Backend"
date:   2017-04-03 01:25:05 +0200
categories: wordpress
---

<p>To Customise your WordPress Backend (Dashboard, Admin menu pages, Admin bar menu, Remove contextual help)</p>

<code>if (!is_super_admin()) {
    add_action('admin_bar_menu', 'remove_wp_logo', 999);
    add_action('admin_init', 'my_remove_menu_pages');
    add_action('admin_menu', 'adjust_the_wp_menu', 999);
    add_action('admin_head', 'wpse50787_remove_contextual_help');
    // Hoook into the 'wp_dashboard_setup' action to register our function
    add_action('wp_dashboard_setup', 'example_remove_dashboard_widgets');
}

function remove_wp_logo($wp_admin_bar) {
    $wp_admin_bar->remove_node('wp-logo');
    $wp_admin_bar->remove_node('appearance');
    $wp_admin_bar->remove_node('comments');
}

function my_remove_menu_pages() {
    remove_menu_page('plugins.php');
    remove_menu_page('users.php');
    remove_menu_page('upload.php');
}

function adjust_the_wp_menu() {
    $page = remove_submenu_page('themes.php', 'nav-menus.php');
    $page = remove_submenu_page('themes.php', 'widgets.php');
    $page = remove_submenu_page('themes.php', 'theme-editor.php');
    $page = remove_submenu_page('themes.php', 'customize.php');
}

function wpse50787_remove_contextual_help() {
    $screen = get_current_screen();
    $screen->remove_help_tabs();
}

function example_remove_dashboard_widgets() {
    remove_meta_box('dashboard_primary', 'dashboard', 'side');
    remove_meta_box('dashboard_secondary', 'dashboard', 'side');
    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
}
</code>

