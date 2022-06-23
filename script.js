$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>60){
            $('header .header-2').addClass('header-active');
        }else{
            $('header .header-2').removeClass('header-active');

        }

      
    });

    $('.controls .buttons').click(function(){
        $(this).addClass('button-active').siblings().removeClass('button-active');

        let filter=$(this).attr('data-filter');
        if(filter == 'all'){
            $('.dish .image').show(400);
        }else{
            $('.dish .image').not('.'+filter).hide(200);
            $('.dish .image').filter('.'+filter).show(400);
        }

    });
});