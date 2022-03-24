$(function(){
	$('.banner .conteiner .slides-list').slick({
		centerMode:false,
		slidesToShow:1,
		arrows:false,
		infinite:true,
		dots:true,
		autoplay: true,
      	mobileFirst: true,
     	respondTo: 'min',
      	adaptiveHeight: false,
	});
})