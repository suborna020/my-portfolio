$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// @setInterval(functionName,millisecond)
//1second=1000ms
var catPosition = 0;
const WindowWidth = $(window).width();
const catLastPosition = $(window).width() + 10;

// @setInterval(functionName,millisecond)
var interval = setInterval(Anim, 400);
function Anim() {
  catPosition = catPosition + 20;
  if (catPosition >= catLastPosition) { //left margin 800px hole interval function clear hoye jay
    clearInterval(interval);
  } else { //margin left 800px na hoa porjonto funtion cholbay
    var target = document.getElementById("PictureAnimation");
    target.style.marginLeft = catPosition + 'px';
  }
}
jQuery(function ($) {

$('#ClickBackground').on('click', function () {
  $("body").toggleClass("gradientBackground");


});
});


// $("#ClickBackground").click(function () {
// });