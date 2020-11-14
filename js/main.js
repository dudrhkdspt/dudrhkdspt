$(function(){
    $("#container").slick({
        dot: false,
        arrows: false,
        vertical: true,
        autoplay: false,
        speed: 1000,
        verticalSwiping: true,
        infinite: false
    });
    
    
    $(".menu > button").on("click", function(){
        var $menuArea = $("#menu_area");
        
        $(this).toggleClass("active");
        $menuArea.fadeToggle(500);
        
    });
    
    $("#container").on("mousewheel", function(event){
        var deltaY = event.originalEvent.wheelDelta;
        
        var current = $("#container").find(".slick-current").data().slickIndex;
        
        
        if(deltaY < 0) {
            if(current != 4){
                $("#container").slick("next");
            }
        } else {
            if(current != 0){
                $("#container").slick("prev");
            }
        }
    });

});
    
function slickMenuHandle(idx){
    $("#container").slick("slickGoTo", idx);
}

