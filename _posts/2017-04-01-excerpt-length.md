---
layout: post
title:  "Excerpt Length"
date:   2017-04-1 08:05:05 +0200
categories: wordpress
---

<p>To change the excerpt-length add this code to your functions file:</p>
<code>
function wpe_excerptlength_teaser($length) {
    return 45;
}
function wpe_excerptlength_index($length) {
    return 10;
}
function wpe_excerptmore($more) {
    return ' <a class="moretag" href="' . get_permalink($post->ID) . '">Read more&raquo;&raquo;&raquo;</a>...';
}
function wpe_excerpt($length_callback = '', $more_callback = '') {
    if (function_exists($length_callback))
        add_filter('excerpt_length', $length_callback);
    if (function_exists($more_callback))
        add_filter('excerpt_more', $more_callback);
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    $output = '<p>' . $output . '</p>'; // maybe wpautop( $foo, $br )
    echo $output;
}
</code>
<p>And then in your loop add this line of code:</p>
<code>wpe_excerpt('wpe_excerptlength_index', 'wpe_excerptmore');</code>
<p>Or</p>
<code>wpe_excerpt('wpe_excerptlength_teaser', 'wpe_excerptmore');</code>

Save and run...
