---
layout: post
title:  "Front end posts"
date:   2017-04-1 06:10:05 +0200
categories: wordpress
---

To post from the front end in WordPress:

<code>if ('POST' === $_SERVER['REQUEST_METHOD'] && !empty($_POST['action'])) {

	// Do some minor form validation to make sure there is content

	if ($_POST['description'] != '') {
		$description = $_POST['description'];

	} else {

		wp_redirect(get_bloginfo('url') . '/');

		exit ;
	}

	$user_id = $current_user -> user_id;

	  $char_limit = 40;
	 $post_title = strip_tags($_POST['description']);
	 if (strlen($post_title) > $char_limit) {
	 $post_title = substr($post_title, 0, $char_limit) . ' ... ';
	 }
	 
	if (isset($_POST['title'])) {
		$title = $_POST['title'];
	} else {
		echo 'Please enter a title';
	}
	if (isset($_POST['description'])) {
		$description = $_POST['description'];
	} else {
		echo 'Please enter the content';
	}

	$tags = $_POST['post_tags'];

	// Add the content of the form to $post as an array
	$post = wp_insert_post(array('post_author' => $user_id, 'post_title' => $title, 'post_content' => $description, 'post_category' => array($_POST['cat']), // Usable for custom taxonomies too
	'tags_input' => $tags, 'post_status' => 'publish', // Choose: publish, preview, future, etc.
	'post_type' => $_POST['offer'] // Use a custom post type if you want to
	));
	
	 if (!function_exists('wp_generate_attachment_metadata')) {
	 require_once (ABSPATH . "wp-admin" . '/includes/image.php');
	 require_once (ABSPATH . "wp-admin" . '/includes/file.php');
	 require_once (ABSPATH . "wp-admin" . '/includes/media.php');
	 }

	 if ($_FILES) {
	 foreach ($_FILES as $file => $array) {
	 if ($_FILES[$file]['error'] !== UPLOAD_ERR_OK) {
	 return "upload error : " . $_FILES[$file]['error'];
	 }
	 $attach_id = media_handle_upload($file, $post);
	 }

	 }
	 if ($attach_id > 0) {
	 //and if you want to set that image as Post  then use:
	 update_post_meta($post, '_thumbnail_id', $attach_id);
	 // echo "uploaded the new Thumbnail";

	 }
 
	wp_insert_post($post);
	// Pass  the value of $post to WordPress the insert function
	// http://codex.wordpress.org/Function_Reference/wp_insert_post
	wp_redirect(get_permalink($post));
	exit();

}// end IF

// Do the wp_insert_post action to insert it
do_action('wp_insert_post', 'wp_insert_post');</code>
