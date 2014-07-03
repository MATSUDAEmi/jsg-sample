
	(function($){
		// alert('main' + $('main').height())
		$(window).on('scroll',function(){
			// console.log($(window).scrollTop())
			var pos = $(window).scrollTop(),
				winH = $(window).height(),
				mainH = $('main').height(),
				headerH = $('header').height(),
				dif = pos / ($('body').height() - winH),
				limitPoint = ($('body').height() - winH * 2);
			// posが下から1600の時点で、樹とビルと下の雲を動かすして空の色を明るくする。
			// それまでは上方の雲の動作。
console.log(dif)
			if( pos > limitPoint ){
				var posLat = (pos - limitPoint) / winH,
					treeCenter = 15 + (posLat / 2) * 350; //０〜１
console.log(treeCenter)
				console.log('posLat,' ,posLat)
				$('.cloud1').css({	backgroundPosition: 'center ' + (100 - posLat * 15) + '%'})
				$('.building').css({	backgroundPosition: 'center ' + (100 + (1 - posLat) * 100)  + '%'})
				$('.treeLeft').css({	backgroundPosition: (50 - treeCenter) + '% bottom' })
				$('.treeRight').css({	backgroundPosition: (50 + treeCenter) + '% bottom' })
				$('.sky').css({ opacity :  1 - posLat })

				console.log('in' ,dif)
			} else {
				console.log(dif)

			} 
			// console.log(pos, dif)
			//後ろの雲は変化量少なく。前の雲は変化量大きく。
			$('.cloud2').css({	backgroundPosition: 'center ' + ( 10 +  ( 40 * dif )) + '%'})
			$('.cloud3').css({	backgroundPosition: 'center ' + ( 20 * dif ) + '%'})
		})
	})(jQuery)