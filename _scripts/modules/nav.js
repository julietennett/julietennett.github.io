class Nav {
  constructor() {
    this.$body = $('body');
    this.$navButton = $('.nav--hamburger-button');
    this.$sliderButton = $('.nav--slider-button');

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
