// Toggle class on/off for line through if clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
// Remove the Todo with the span
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});
// Add new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// Grabbing input
		var todoText = $(this).val();
		$(this).val("")
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

// Toggle Input
$("#togglePlus").click(function(){
	$("input[type='text'").fadeToggle();
})