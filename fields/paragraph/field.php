<div class="<?php echo $field_wrapper_class; ?>">
	<?php echo $field_label; ?>
	<div class="<?php echo $field_input_class; ?>">
		<textarea class="<?php echo $field_class; ?>" rows="3" id="<?php echo $field_id; ?>" name="<?php echo $field_name; ?>"><?php echo htmlentities( $field_value ,ENT_COMPAT|ENT_HTML401, "UTF-8"); ?></textarea>
		<?php echo $field_caption; ?>
	</div>
</div>

<?php



?>