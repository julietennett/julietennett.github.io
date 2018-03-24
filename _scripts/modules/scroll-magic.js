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
    new ScrollMagic.Scene()
  }


}

export default ScrollAnimation;
