$(document).ready(function ()
{   var SCROLL_ANIMATED = false;


    $(document).scroll(function(){
        var scrolled = $(window).scrollTop();
        var win_height = $(window).height()-80;
        var height_delta = 200;


        if (!SCROLL_ANIMATED && scrolled > 0)
        {
            $('body,html').stop().animate({ scrollTop: win_height }, 800);
            SCROLL_ANIMATED = true;
        }

        if(scrolled >= win_height-height_delta)
        {
            $("#nav-wrapper").stop().animate({
                opacity:1
            },500);
        }
        else if (scrolled < win_height)
        {
            $("#nav-wrapper").stop().animate({
                opacity:0
            },250);
        }
    });
});


