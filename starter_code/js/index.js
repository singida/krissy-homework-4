$(document).ready(function() {
// Tabbing things in will make your code easier to read and debug
  $('.readmore').click(readMore);
  $('.readless').hide();

  function readMore() {
      event.preventDefault();
      $('#show-this-on-click').slideToggle();
      $('.readmore').hide();
      $('.readless').show();
      $('.readmore').css('backgroundColor', 'red')
      $('.readless').css('backgroundColor', 'blue')
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

  $('.learnmore').click(learnMore);

  function learnMore() {
  	event.preventDefault();
  	$('#learnmoretext').slideDown();
  	$('.learnmore').hide();
  }

  $('#buttonblue').click(buttonBlue);

  function buttonBlue() {
  	event.preventDefault();
  }


}); 


    // Do whatever you wanted to do when the user clicks the link