$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $("#btnScrollToTop").fadeIn();
        }else{
            $("#btnScrollToTop").fadeout();
        }
    
});
    $("#btnScrollToTop").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800)
    });
});