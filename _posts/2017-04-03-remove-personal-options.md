---
layout: post
title:  "Remove Personal Options"
date:   2017-04-3 12:24:05 +0200
categories: wordpress
---

To remove the personal options in the profile page:

<code>
if (!function_exists('cor_remove_personal_options')) {
        function cor_remove_personal_options($subject) {
        $subject = preg_replace('#<h3>Personal Options</h3>.+?/table>#s', '', $subject, 1);
        $subject = preg_replace('#<label for="aim"></label>.+?/tr>#s', '', $subject, 1);
        $subject = preg_replace('#<label for="yim"></label>.+?/tr>#s', '', $subject, 1);
        $subject = preg_replace('#<label for="jabber"></label>.+?/tr>#s', '', $subject, 1);
        return $subject;
    }
    function cor_profile_subject_start() {
        ob_start('cor_remove_personal_options');
    }
    function cor_profile_subject_end() {
        ob_end_flush();
    }
}
</code>
