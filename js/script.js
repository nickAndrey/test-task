$(".arrow").click(function(){
    $(this).toggleClass('rotated');
    $(this).parent().next('ul').slideToggle().css({"display":"flex"});
});

$(".close-but").click(function(){
    $(".popUp").toggle();
});
