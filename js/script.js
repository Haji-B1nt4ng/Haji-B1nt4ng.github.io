// event pada link di klik

$('.page-scroll').on('click', function(e){
	// ambil isi
	var tujuan = $(this).attr('href');

//tangkap elemen

	 var elemenTujuan = $(tujuan);


// pindah scrool

$('html,body').animate({
	scrollTop:elemenTujuan.offset().top-50 
});

	e.preventDefault();
});

// paralax


// about

$(window).on('load', function(){
	$('.pkiri').addClass('pMuncul');
	$('.pkanan').addClass('pMuncul');
});


$(window).scroll(function(){
	
// jumbotron
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({

		'transform' : 'translate(0px, '+wScroll/4+'%)'
	});
	
	$('.jumbotron h1').css({

		'transform' : 'translate(0px, '+wScroll/2+'%)'
	});

	$('.jumbotron p').css({

		'transform' : 'translate(0px, '+wScroll/1+'%)'
	});

// portfolio

	if(wScroll > $('.portfolio').offset().top -400 ) {
		$('.portfolio ,.thumbnail').each(function(i) {
			setTimeout(function() {
		$('.portfolio , .thumbnail').eq(i).addClass('muncul');
			},300 * i );
	});
	
	
	
	}

});