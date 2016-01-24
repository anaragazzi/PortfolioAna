jQuery(function() {
	$(document).ready(function(){
		console.log("jQuery OK!");
		smoothScroll(600);
		workBelt();
		workLoad();
		showElement();
		showElementEnglish();
	});
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );
	    
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({scrollTop: target.offset().top}, duration);
	    }
	});
}


function workBelt() {

	$('.thumb-unit').click(function() {
		$('.work-belt').css('left','-100%');
		$('.work-container').show();
	});
	
	$('.work-return').click(function() {
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});
	
	$('.work-return2').click(function() {
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});

}

function  workLoad() {
  
  $.ajaxSetup({ cache: false });
  
  $('.thumb-unit').click(function() {
  
    var $this = $(this),
        newTitle = $this.find('span').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/work/'+ newfolder +'.html';
      
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
  
}


function showElement() {

	$('div.textcontent').hide();
	$('a.text').bind('click', function() {
	    $('div.textcontent').fadeOut(0);
	    $('#'+$(this).attr('id')+'content').delay(100).fadeIn(800);
	});  

};


function showElementEnglish() {

	$('div.textcontent-ing').hide();
	$('a.text-ing').bind('click', function() {
	    $('div.textcontent-ing').fadeOut(0);
	    $('#'+$(this).attr('id')+'content-ing').delay(100).fadeIn(800);
	});  

};