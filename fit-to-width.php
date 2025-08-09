<?php

/**
 * Plugin Name:       Fit To Width Text
 * Description:       A text block where each line is automatically full width.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Kevin Batdorf
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fit-to-width
 *
 * @package kevinbatdorf
 */

defined('ABSPATH') or die;

add_action('init', function () {
	register_block_type(__DIR__ . '/build');
	wp_set_script_translations('kevinbatdorf/fit-to-width', 'fit-to-width');
});
