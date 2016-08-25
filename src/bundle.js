$(document).ready(function() {
  $('.mobile-menu-icon').on('click', function() {
    $('.nav-links').toggleClass('active');
    $(this).toggleClass('open');
  });
});
