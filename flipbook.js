
var flipbook = $("#flipbook");

$(window).resize(function () { /* do something */ });


flipbook.turn({
    width: 400,
    height: 300,
    autoCenter: true
});





jQuery.event.add(window, "resize", resizeFrame);

function resizeFrame(){

    var w = $('#main').width(); // this is div for ref

    if(w<=320){
    $('#flipbook').turn('size', '220', '287');
    }else 
    $('#flipbook').turn('size', '480', '626');
    }


