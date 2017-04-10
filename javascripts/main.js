
$("#reveal").on('click', function() {
	$(this).parent('div').prev('div').find('.hidden').removeClass('hidden');
	$(this).replaceWith("<p>Zoe gives helpful feedback. Because she is the lead instructor, her assistance comes at a price of $5.00, or one pie.</p>");
	console.log($(this).parent('div'));
});
