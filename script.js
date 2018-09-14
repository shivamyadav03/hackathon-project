jQuery(document).ready(function($){
  $.Scrollax();
});
// $(document).ready(function(){
//   console.log('entered')
//   $('#name').fadeIn(400);
// })
// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 10;
// var navbarHeight = $('header').outerHeight();
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 400);
//
// function hasScrolled() {
//     var st = $(this).scrollTop();
//
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
//
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('nav').removeAttr('id');
//         $('nav').attr('id','nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('nav').removeAttr('id');
//             $('nav').attr('id','nav-down');
//
//         }
//     }
//
//     lastScrollTop = st;
// }