$(document).ready(function(){
        
    $('#nav_icon').click(function(){
        $('nav.hidden_menu').toggle()
    });
   
    
    
    
    
    
    
    
        //hide_menu
//        $('#nav_icon span').onclick(function(){
//            $('nav.hidden_menu').css('display','show');
//        },function(){
//            $('nav.hidden_menu').css('display','hide');
//        });
    
    
    
         //hide_menu
//         $('nav.hidden_menu ul li').click(function(e){
//			e.preventDefault();
//			var href = $(this).find('a').attr('href');
//			
//            
//            
//            
//            
//			var target = (href == '#' || href =='') ? 'html' : href;
//
//			var tt = $(target).offset().top;
//            console.log(tt);
//			$('html, body').stop().animate({scrollTop:tt},600);
//
//			
//		});
//    
    
    
    
    
    
    
    
    
    
        //section00 nav
		$('.nav_box ul li, nav.hidden_menu ul li').click(function(e){
			e.preventDefault();
			var href = $(this).find('a').attr('href');
			
            
            
            
            
			var target = (href == '#' || href =='') ? 'html' : href;

			var tt = $(target).offset().top;
            console.log(tt);
			$('html, body').stop().animate({scrollTop:tt},600);

			
		});
    
    
    
    
    //각 섹션의 위치에서 해당 메뉴가 on
			$('section').each(function(){
				var i = $(this).index();

				if ($(this).offset().top <= $(window).scrollTop()) {
					$('.nav_box li a').removeClass('on');
					$('.nav_box li').eq(i).find('a').addClass('on');
				}
			});
	

        $('#nav_icon').click(function(){
            $(this).toggleClass('open');
	    });



		//section2 flipster
		var coverflow = $("#coverflow").flipster();
		
    
        //section3 flipster
        
        var coverflow_02 = $("#coverflow_02").flipster();

    //section04 left
    
    
    
    
    
    
    
    
    
    
    
    
    //section04 center
    $('.s04_main img:nth-child(1)').click(function(){
        $('.s04_txt').toggle()
    });


    
    
    
    
    
     //section05 right img hover
    $('.s05_right_imgs img').hover(function(){
        $(this).animate({scale:'+=0.5'},400);
    }, function(){
        $(this).animate({scale:'-=0.5'},400);
    });
    
    //section05 txtbox
    

    $('#section05 .popup img').click(function(){
        $('#section05 .s05_txt').toggle()
    });
    
    
    
    
    
    
    //s06 slide
    var current = 0;
	var banner = $('#section06 .slide div');

	setInterval(function(){
			banner.eq(current%5).css({left:0}).animate({left:'100%'},500);
			current++;
			banner.eq(current%5).css({left:'100%'}).animate({left:0},500);
	},5000);
    
    
    //06
    $('#section06 > img').click(function(){
        $('.s06_popup').css('display','block');
    });
    
    
    
    $('.s06_popup_box >img').click(function(){
        $('.s06_popup').css('display','none');
    });
    
    
    
    
    
});