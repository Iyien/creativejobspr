$(document).ready(function() {
  // Init
  // $.get('home.html', function(data) {
  //   $('.container').html(data);
  // });

// movement rows
  // $('.navbar-toggle').on('click', function() {
  //   $(this).toggleClass('open');
  //   $(this).toggleClass('closed');
  // });

  // Link to do scrollDown animation
  $('#creatives-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#creatives').offset().top - 50)
    }, 1000);
    return false;
  });

  $('#about-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#about').offset().top - 50)
    }, 1000);
    return false;
  });

  $('#services-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#services').offset().top - 50)
    }, 1000);
    return false;
  });

  $('#content-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#content').offset().top - 50)
    }, 1000);
    return false;
  });

  $('#contact-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#contact').offset().top - 50)
    }, 1000);
    return false;
  });

  $('#logo').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#page-top').offset().top - 50)
    }, 1000);
    return false;
  });

  $('#first-btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#creatives').offset().top - 50)
    }, 1000);
    return false;
  });

  $('#second-btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#services').offset().top - 50)
    }, 1000);
    return false;
  });


  // Links
  // $('#home').on('click', function() {
  //   $.get('home.html', function(data) {
  //     $('.container').html(data);
  //   });
  // });
  //
  // $('#about').on('click', function() {
  //   $.get('about.html', function(data) {
  //     $('.container').html(data);
  //   });
  // });

  $(window).scroll(function() {
     if ($(window).scrollTop() > ($(window).height() * 0.05)) {
       $('#mainNav').css('background-color', '#f24545 ');
     } else {
       $('#mainNav').css('background-color', 'transparent');
     }
   });


  // Events that need to be listened upon change
  // $('.container').on('click', '.animate', function() {
  //   $('img').animate({
  //     left: "+=500"
  //   }, 2000, function() {
  //     $(this).animate({
  //       opacity: 0,
  //       bottom: "+=500"
  //     }, 2000, function() {
  //       $('h1').text('Complete');
  //     });
  //   });
  // });

  $('.hvr-pulse').on('click', function(e) {
    e.preventDefault();
  });

  // $('.service-box').hover(function () {
  //   $(this).addClass('magictime puffIn');
  // }, function() {
  //   $(this).removeClass('magictime puffIn');
  // });

  $('.navbar-nav li a').on('click', function(){
     $('.navbar-collapse').removeClass('in');

     });

    //  //jQuery to collapse the navbar on scroll
    //  $(window).scroll(function() {
    //      if ($(".navbar").offset().top > 50) {
    //          $(".navbar-fixed-top").addClass("top-nav-collapse");
    //      } else {
    //          $(".navbar-fixed-top").removeClass("top-nav-collapse");
    //      }
    //  });
     //
    //  //jQuery for page scrolling feature - requires jQuery Easing plugin
    //  $(function() {
    //      $('a.page-scroll').bind('click', function(event) {
    //          var $anchor = $(this);
    //          $('html, body').stop().animate({
    //              scrollTop: $($anchor.attr('href')).offset().top -50
    //          }, 1500, 'easeInOutExpo');
    //          event.preventDefault();
    //      });
    //  });


});
