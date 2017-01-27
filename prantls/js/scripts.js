/* Validates form data on contact.html */
function validate(){
	var zipcode = $("#zipcode").val();
	if(isNaN(zipcode) || (zipcode.length != 0 && zipcode.length != 5)){
		alert("Invalid Zip Code.");
		return false;
	}
	return true;
}

/* Javascript for scroll-down button on index.html */
function scrollTo(id) { 
	/*http://stackoverflow.com/questions/4884839/how-do-i-get-a-element-to-scroll-into-view-using-jquery*/
	var offset = $(id).offset(); // Contains .top and .left
	offset.left -= 20;
	offset.top -= 20;
	$('html, body').animate({
		scrollTop: offset.top,
    	scrollLeft: offset.left
	});
}

/* Javascript for back-to-top button on all non-employee HTMLs */
function scrollToTop() {
	/*http://stackoverflow.com/questions/4884839/how-do-i-get-a-element-to-scroll-into-view-using-jquery*/
	$('html, body').animate({
		scrollTop: 0
	});
}

/* Javascript for Google Map pop-up window on stores.html */
function popUpWindow(link){
	window.open(link,'1458831327973',
	'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
	return false;
}