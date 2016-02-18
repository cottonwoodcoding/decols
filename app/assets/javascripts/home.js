$(document).ready( function() {
  $.ajax({
    url: '/image_path',
    type: 'GET',
    dataType: 'JSON'
  }).done( function(data) {
    $('.home-motto').removeClass('overlay');
    var img = new Image();
        img.src = data.path;

    var int = setInterval(function() {
        if (img.complete) {
            clearInterval(int);
            document.getElementById('main').style.backgroundImage = 'url(' + img.src + ')';
        }
    }, 50);
  });
});
