$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


jQuery(function ($) {
  // cat animation 
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
      if (target) {
        target.style.marginLeft = catPosition + 'px';

      }
    }
  }
  // cat animation end 
  //--------- Experience> collapse
  $('.experience .title').on('click', function () {
    otherCollapseBox = $('.experience .title').not(this).parent().prev();
    otherCollapseBox.removeAttr("checked", "checked");
  });
  // header part : body background change 
  $('#ClickBackground').on('click', function () {
    $("body").toggleClass("gradientBackground");
  });
});


$('[data-fancybox]').fancybox({
});

// $('[data-fancybox="gallery"]').fancybox({
// });

// $().fancybox({
//   selector: '.imglist a:visible'
// });

// function Click() {

//   $.fancybox.open([
//     {
//       src: 'https://lipsum.app/id/32/1600x1200',
//       title: '1st title'
//     },
//     {
//       src: 'https://lipsum.app/id/22/200x150',
//       title: '2nd title'
//     },
//     {
//       src: 'https://lipsum.app/id/22/1600x1200',
//       title: '3rd title'
//     }
//   ], {
//     padding: 0
//   });
//   return false;
// }

// test 


// function bye() {
//   $.fancybox.open({
//     src  : 'https://lipsum.app/id/32/200x150',
//     type : 'iframe',
//     opts : {
//       afterShow : function( instance, current ) {
//         console.info( 'done!' );
//       }
//     }
//   });
// }
