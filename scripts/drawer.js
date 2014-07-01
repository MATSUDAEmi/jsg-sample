
	(function($){
		var openDrawer = function(){
			var target = $('body'),
				hideLayer = $('<div />').addClass('hideLayer').css('display','none');
			target.addClass('showDrawer');
			target.append(hideLayer);
			hideLayer.fadeIn(350);
			hideLayer.on('click', onClickMenuBtn)
			$('body').css('overflow-y','hidden')
			console.log("show in")
		}
		var closeDrawer = function(){
			var target = $('body'),
				hideLayer = $('.hideLayer');
			target.removeClass('showDrawer')
			$('body').css('overflow-y','auto');
			hideLayer.fadeOut(350,function(){
				$(this).remove();
			});
			console.log("close in")
		}
		var onClickMenuBtn = function(e){
			console.log("clicked")
			e.preventDefault();
			if($('body').hasClass('showDrawer')){
				closeDrawer();
			} else {
				openDrawer();
			}
		}
		$('.showNav').on('click', onClickMenuBtn)
		$(window).on('resize', function(e){
			if( $(window).width() > 420 ){
				closeDrawer();
			}
		})
	})(jQuery)