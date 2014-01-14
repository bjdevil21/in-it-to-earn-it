<?php
/**
 * @file views-view-fields.tpl.php
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>

<?php 
    dpm("on the right page for theming");
?>
<div id="page-wrapper">
<div id="page">

<!-- Page Header -->
<header id='masthead'>
<nav class='navbar navbar-fixed-top'>
<div class='navbar-inner'>
<div class='container'>
<?php print render($page['header']); ?>
</div>
</div>
</nav>
</header>

<?php if (!$asu_local_navicon): ?>
<section class="section hidden-collapse hidden-desktop" id="menu">
<div class="container">
<nav class='navbar navbar-fixed-top fixer'>
<div class='navbar-inner fixer'>
<div class='nav-collapse'>
<?php print render($page['menu']); ?>
</div>
</div>
</nav>
</div>
</section>
<?php endif; ?>

<?php if ($site_name): ?>
<section class="section" id="site-name-desktop">
<div class="container">
<h1 class='site-title'>
<span class='first-word'><?php print $site_name_first; ?> </span>
<?php print $site_name_last; ?>
</h1>
</div>
</section>
<?php endif; ?>

<?php if ($asu_picture): ?>
<?php if ($is_front) : ?>
<section class="section" id="picture">
<div class="container">
<?php print $asu_picture; ?>
</div>
</section>
<?php endif; ?>
<?php endif; ?>

<section class="section" id="menu">
<div class="container">
<nav class='navbar navbar-fixed-top'>
<div class='navbar-inner'>
<?php if ($site_name): ?>
<div class='navbar-sitename-collapse'>
<h1 class='site-title'>
<span class='first-word'><?php print $site_name_first; ?></span>
<?php print $site_name_last; ?>
</h1>
</div>
<?php endif; ?>

<?php if ($asu_local_navicon): ?>
<?php print $asu_local_navicon; ?>
<?php endif; ?>

<div class='<?php $asu_local_navicon ? print 'nav-collapse' : print 'visible-desktop'; ?>'>
<?php print render($page['menu']); ?>
</div>
</div>
</nav>
</div>
</section>

<?php if ($messages): ?>
<div id="messages">
<div class="container">
<div class="section clearfix">
<?php print $messages; ?>
</div>
</div>
</div>
<!-- /.section, /#messages -->
<?php endif; ?>

<?php if ($tabs): ?>
<section class="section" id="tabs">
<div class="container">
<?php print render($tabs); ?>
</div>
</section>
<?php endif; ?>

<?php if ($action_links): ?>
<section class="section" id="action-links">
<div class="container">
<?php print render($action_links); ?>
</div>
</section>
<?php endif; ?>

<!-- Page Main -->
<div id="main-wrapper" class="clearfix">
<div id="main" class="clearfix">
<div id="content"
class="column <?php $no_panels ? print ' container"' : ''; ?>">
<a id="main-content"></a>
<?php print render($page['content']); ?>
</div>
<!-- /.section, /#content -->

</div>
</div>
<!-- /#main, /#main-wrapper -->

<!-- Page Footer -->
<footer class='section' id='footerlower' role='contentinfo'>
<div class='container'>
<div class='row-fluid'>
<?php print render($page['footer']); ?>
</div>
</div>
</footer>

<!-- Page Footer -->
<section class='section' id='closure'>
<div class='container'>
<div class='row-fluid'>
<?php print render($page['closure']); ?>
</div>
</div>
</section>

</div>
</div>
<!-- /#page, /#page-wrapper -->