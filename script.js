//adds animation to navigation bar
$('nav a').on('click', function () {
  const goToSection = '[data-section=' + $(this).attr('id') + ']';
  $('body, html').animate({
    scrollTop: $(goToSection).offset().top
  }, 500)
})