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

    this.hamburgerColor();
  }

  toggleNav() {
    this.$body.toggleClass('js-slider-open');
  }

  hamburgerColor() {
    let $hamburgerIcon = $('.nav__hamburger--icon');
    let $hero = $('.hero');
    let heroHeight = $('.hero').innerHeight();
    let projectSection = $('.page-section').innerHeight();
    let scrollPos = window.scrollY;

    const $projectSectionArr = $('.page-section');

    if ($hero.hasClass('dark')) {
      $hamburgerIcon.addClass('js-icon-white');
    }

    $(document).scroll(function() {
      var scrollPos = window.scrollY;

      for (let i = 0; i < $projectSectionArr.length; i++) {
        let $projectSection = $projectSectionArr.eq(i);
        let offset = $projectSection.offset().top;
        let sectionHeight = $projectSection.innerHeight();
        if (scrollPos > (offset - 37) && scrollPos < offset + sectionHeight) {
          if ($projectSection.hasClass('dark')) {
            $hamburgerIcon.addClass('js-icon-white');
          } else {
            $hamburgerIcon.removeClass('js-icon-white');
          }
        }
      }
    });
  }
}

export default Nav;
