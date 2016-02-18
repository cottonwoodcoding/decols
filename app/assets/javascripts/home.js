$(document).ready( function() {
  var img = new Image();
      img.src = 'assets/cover-compressor.png';

  var int = setInterval(function() {
      if (img.complete) {
          clearInterval(int);
          document.getElementById('main').style.backgroundImage = 'url(' + img.src + ')';
      }
  }, 50);
});
