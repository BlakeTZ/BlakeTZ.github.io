$(document).ready(function() { // do this when the document is loaded
	$("#Dialer").show(); // show the element with ID "element"
	$("#content_list").hide(); // hide the element with ID "otherElement"
  $("#add_content").hide(); // hide the element with ID "otherElement"

$("#Dialer").click(function() { // when "button_id" is clicked
	$("#dialer").show(); // show element
	$("#content_list").hide();	// hide other element
  $("#add_content").hide();	// hide other element
});

$("#list").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#add_content").hide();	// hide other element
  $("#dialer").hide();	// hide other element
});

$("#Add").click(function() { // when "button_id" is clicked
	$("#add_content").show(); // show element
	$("#dialer").hide();	// hide other element
  $("#content_list").hide();	// hide other element
});
});
