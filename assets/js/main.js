$('.right div').load('pages/inicio.html');

$('li').each(function(){

	$(this).find('a').on('click', function(e){
		e.preventDefault();

		$('.itens a').removeClass('active');
		$(this).addClass('active');
		var href = "pages/" + $(this).attr('href');
		
		$.ajax({url: href}).done(function(data) {
			$('.right div').html(data);
		});
	})
})