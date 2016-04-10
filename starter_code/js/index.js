$(document).ready(function() {

$('.readmore').click(readMore);

function readMore() {
    event.preventDefault();
    $('readMore').slideDown
}

function showThisOnClick() {
	$('#showThisOnClick').show();
}
$('#showThisOnClick').hide();
$('#readMoreFunction').click(showThisOnClick);


}); 


    // Do whatever you wanted to do when the user clicks the link