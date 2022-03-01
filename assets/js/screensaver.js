var cursortimeout;
var ss_active = false;

$(document).mousemove(function(){
    clearTimeout(cursortimeout);
    if(ss_active){
        stop_ss();
    }
    cursortimeout = setTimeout(show_ss, 1000);
})

function show_ss(){
    $("#screensaver").fadeIn();
    ss_active = true;
    show_animation();
}

function show_animation(){
    if (screensaver_active) {
        $("#screensaver").animate({
          backgroundColor: changeColor()}, screensaver_animation);
      }
    // if(ss_active){
    //     $("#screensaver").animate(
    //         {backgroundColor: "#ffffff"},show_animation
    //     );
    // }
}
function changeColor(){
    myColor = "rgb("+ randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
    return myColor;
  }
  function randomNumber() {
    return Math.floor(Math.random() * 256);
  }

function stop_ss(){
    $("#screensaver").fadeOut();
    ss_active = false;
}


