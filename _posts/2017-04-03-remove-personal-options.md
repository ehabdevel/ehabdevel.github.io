---
layout: post
title:  "Remove Personal Options"
date:   2017-04-3 12:24:05 +0200
categories: wordpress
---

To remove the personal options in the profile page:

<code>
<?php
if (!function_exists('cor_remove_personal_options')) {
    /**
     * Removes the leftover 'Visual Editor', 'Keyboard Shortcuts' and 'Toolbar' options.
     */
    function cor_remove_personal_options($subject) {
        $subject = preg_replace('#<h3>Personal Options</h3>.+?/table>#s', '', $subject, 1);
        $subject = preg_replace('#<label for="aim">.+?/tr>#s', '', $subject, 1);
        $subject = preg_replace('#<label for="yim">.+?/tr>#s', '', $subject, 1);
        $subject = preg_replace('#<label for="jabber">.+?/tr>#s', '', $subject, 1);
        return $subject;
    }
    function cor_profile_subject_start() {
        ob_start('cor_remove_personal_options');
    }
    function cor_profile_subject_end() {
        ob_end_flush();
    }
}?>
</code>
