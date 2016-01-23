$(document).ready(function(){
  $('.home-motto').css('height', (window.innerHeight - 125));

  $('.alert').show(function() {
    return setTimeout((function() {
      return $('.alert').slideToggle();
    }), 3000);
  });

  // Materialize Stuff
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();

  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});
