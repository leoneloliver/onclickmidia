// Code goes here
$(document).ready(function() {
  // parallax
  $('.scroll-down').each(function() {
    var $obj = $(this);
    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / 3);
      var bgpos = '50% ' + (yPos - 320) + 'px';
      $obj.css('background-position', bgpos);
    });
  });

  setTimeout(function() {
    $('.col-container').waypoint(function() {
      $(".col-3, .wrapper-abaut").css({
        opacity: "1",
        marginTop: "0"
      });
    }, {
      offset: 200
    });

    $('.skills').waypoint(function() {
      $('.chart').easyPieChart({
        scaleColor: false,
        lineWidth: 5,
        lineCap: 'round',
        barColor: '#FF9800',
        size: 100,
        animate: 500
      });
    }, {
      offset: 300
    });

    $('.steps').waypoint(function() {
      $(this).css({
        opacity: '1'
      }).removeClass('show-left').removeClass('show-right');
    }, {
      offset: 600
    });

  }, 2000);

});