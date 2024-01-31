
$('.overview__slider').slick({
  infinite: false,
  slidesToShow: 1,
  rtl: document.querySelector('html').getAttribute('dir') == "rtl" ? true : false,
  slidesToScroll: 1,
  nextArrow: `<button class="slick__btn slick__nxt">
  <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.969824" y1="10.3314" x2="20.2187" y2="10.3314" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9006 1.67871L21.5978 10.4383L12.9006 19.198" stroke="#114D69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>`,
  prevArrow: `<button class="slick__btn slick__prev">
  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21" width="23" height="21">
	<title>icons-svg</title>
	<style>
		.s0 { fill: none;stroke: #114d69;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.8 } 
	</style>
	<path id="Layer" class="s0" d="m22.6 10.9h-19.2"/>
	<path id="Layer" fill-rule="evenodd" class="s0" d="m10.7 19.5l-8.7-8.7 8.7-8.8"/>
</svg>
</button>`
});
setTimeout(() => {

  $('.frequentlty__asked__questions__row .faq__wrap p').each(function () {
    $(this).css({ '--height': (this.clientHeight + 'px') })

  })
  setTimeout(() => {
    $('.frequentlty__asked__questions__row .faq__wrap p').each(function () {
      $(this).css({ 'height': (0 + 'px') })
      // $(this).fadeOut(500)
    })
  }, 100);
  $('.frequentlty__asked__questions__row .faq__wrap').each(function () {
    $(this).click(function () {
      $('.frequentlty__asked__questions__row .faq__wrap ').each(function () {
        $(this).removeClass('active__tab')
        // $(this).find('p').fadeOut(0)
        $(this).find('p').css({ 'height': (0 + 'px') })

      })

      $(this).addClass('active__tab');
      $(this).find('p').css({ 'height': ($(this).find('p').css('--height')) })
      // $(this).find('p').fadeIn(500)

    })

  })
  setTimeout(() => {

    $('.frequentlty__asked__questions__row .faq__wrap:first-child ').addClass('active__tab')
    $('.frequentlty__asked__questions__row .faq__wrap:first-child p').each(function () {
      $(this).css({ 'height': ($(this).css('--height')) })

    })
  }, 100);

}, 100);