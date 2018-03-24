import ScrollMagic from 'scrollmagic';

class ScrollAnimation {
  constructor() {
    this.$body = $('body');
    this.controller = new ScrollMagic.Controller(); //property of this class, rather than global var

    if (this.$body.hasClass('home')) {
      this.homeScroll();
    }
  }

  homeScroll() {
    let $workContainer = $('.work__links--container');
    new ScrollMagic.Scene({
      triggerElement: $workContainer,
      duration: $workContainer.height()
    })
    .setPin(".hover__img") // pins the element for the the scene's duration
	  .addTo(controller); // assign the scene to the controller
  }


}

export default ScrollAnimation;
