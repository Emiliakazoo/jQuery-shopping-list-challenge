$(document).ready(function(){
	$('#js-shopping-list-form').submit(function(event){
	  event.preventDefault();

	  //check for empty textbox, and stop the code if there is no text. Focus goes to textbox.
	  if($("#shopping-list-entry").val() == 0) {
	  	alert("Enter an item");
	  	$("#shopping-list-entry").focus();
	  	return false;
	  }
	  //if there is text, then this happens
	  var listItem = "<li><span class='shopping-item'>" + $("#shopping-list-entry").val() + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>";
	  $("ul").append(listItem);
	  $("#shopping-list-entry").val('').focus();
	}).on('keyup', '#shopping-list-entry', function(event){
		if(event.which == 13){
			//event.preventDefault();
			$(this).trigger('click');
		}
	});

	//removing shopping list items
	$('ul').on('click', '.shopping-item-delete', function(event) {
 		 $(this).closest('li').remove();
 		 //chaining to either add or remove checkmarks
  	}).on('click', '.shopping-item-toggle', function(event) {
		$(this).parents().siblings('.shopping-item').toggleClass('shopping-item__checked');
	});	

 });