$(document).ready(function () {

  var myLocalStorageVar = localStorage.getItem('DISCLAIMER');
  let quick__navigation__links__outer = document.querySelector('.quick__navigation__links__outer')
  if (quick__navigation__links__outer) {
    if (!myLocalStorageVar) {
      // $('.disclaimer__popup__outer').css({ 'display': 'flex' });
      $('body').append(`
        <div class="disclaimer__popup__outer" id="disclaimer_popup">
      <div class="disclaimer__popup__overlay"></div>
      <div class="disclaimer__popup__contentbox">
        <h4>${$('html').attr('dir') !== 'rtl' ? 'Disclaimer' : 'Disclaimer'}</h4>
        <p>
        ${$('html').attr('dir') !== 'rtl' ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo mollitia fugit odit saepe molestiae nemo quasi expedita repellat quos!' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo mollitia fugit odit saepe molestiae nemo quasi expedita repellat quos!'}
        </p>
        <button id="i_agree">${$('html').attr('dir') !== 'rtl' ? 'I agree' : 'I agree'}</button>
      </div>
    </div>
      `)
      $('body').css({ 'overflow': 'hidden' });
    }
    $('#i_agree').click(function () {
      $('body').css({ 'overflow': 'auto' });
      localStorage.setItem('DISCLAIMER', true);
      $('.disclaimer__popup__outer').remove();
    })
  }
})
$('.overview__slider').slick({
  infinite: false,
  slidesToShow: 1,
  rtl: $('html').attr('dir') === 'rtl', // Use jQuery to get the 'dir' attribute
  slidesToScroll: 1, // Keep slidesToScroll positive regardless of RTL
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

