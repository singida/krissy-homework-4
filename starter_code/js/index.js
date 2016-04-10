$(document).ready(function() {

$('.readmore').click(readMore);

function readMore() {
    event.preventDefault();
    $('#show-this-on-click').slideToggle();
    $('.readmore').hide();
    $('.readless').show();
}

$('.readless').click(readLess);

function readLess() {
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
}

function showThisOnClick() {
	$('#showThisOnClick').show().slideToggle;
	$('.readless').hide();
}
$('#showThisOnClick').hide();
$('#readMoreFunction').click(showThisOnClick);


}); 


    // Do whatever you wanted to do when the user clicks the link