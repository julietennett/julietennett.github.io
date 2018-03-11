class Nav {
  constructor() {
    this.$body = $('body');
    this.$navButton = $('.nav__hamburger--button');
    this.$sliderButton = $('.nav__slider--button');

    this.init();
  }

  init() {
    this.$sliderButton.click(this.toggleNav.bind(this));
    this.$navButton.click(this.toggleNav.bind(this));
  }

  toggleNav() {
    this.$body.toggleClass('js-slider-open');
  }
}

export default Nav;
