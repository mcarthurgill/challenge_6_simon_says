$(document).ready(function(){
	$('a').on('click', function(e){
		e.preventDefault(); 
		var response = $.ajax({
			type: "POST",
			url: '/color',
		}).done(function(response){
			$('li').eq(response.cell).css( { 'background-color': response.color } );
		});
	});
});