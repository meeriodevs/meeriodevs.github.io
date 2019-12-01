$(document).ready(function () {
   // Side nav
  $(".sidenav").sidenav();
  // Scroll Fire
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $("nav").addClass("grey lighten-4");
      $("nav, ul , a").css("color", "#555");
      $("nav").css(" border-bottom-color", "red");
    } else {
      $("nav").removeClass("grey lighten-4");
      $("nav, ul , a").css("color", "#fff");
      $("nav").css(" border-bottom-color", "red");
    }
      
    //Scroll Spy
      $('.tooltipped').tooltip();
      $('.scrollspy').scrollSpy();
  });
});


// type js

var typed = new Typed('.element', {
    strings: ["Create Beautiful Website","Belive in Quality","Do Quality"],
    typeSpeed: 80,
    smartBackspace: true ,// Default value
    loop: true

});
  


// wow js
new WOW().init();
