$(function(){
	$('.container').run();	
});

$.fn.run = function(){

	$('.product-card').hover(
		function(){
			$(this).addClass('hover');
		},
		function(){
			$(this).removeClass('hover');
		}
	);

	$('.product-card').click(function(){
		$(this).removeClass('hover');
		$(this).parents('.product').toggleClass('product-selected');
	});
			
	$('.btn-buy').click(function(){
		$(this).parents('.product').toggleClass('product-selected');
	});
	
	$('.product-disabled .product-card').off('click');
			
};



















		
