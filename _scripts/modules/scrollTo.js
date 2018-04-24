class Scroll {
  constructor() {
    this.scrollTo();
  }

  scrollTo() {
    let $scrollLink = $('.js-scroll-link');
    let $scrollToThis = $('#js-scroll-to');

    $scrollLink.click( function() {
      console.log('clicked');
      $('html, body').animate({
        scrollTop: $scrollToThis.offset().top
     }, 400);
    });
  }

}

export default Scroll;
