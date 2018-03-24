class Homepage {
  constructor() {
    this.$body = $('body');
    if (this.$body.hasClass('home')) {
      this.workLinksColor();
    }
   }

  workLinksColor() {
    var $linkContainer = $(".link--container");
    var $workLink = $(".work__link");
    var $hamburger = $(".nav__hamburger--icon");
    var $hoverDesc = $(".hover__description");
    var $footer__container = $(".footer__container");

    $linkContainer.on("mouseenter", function() {
      $workLink.addClass('js-text-white');
      $(this).children($workLink).addClass('js-text-outline');
      $(this).children($hoverDesc).addClass('js-show');
      $hamburger.addClass('js-icon-white');
      $footer__container.addClass('js-hide');
    })
    $linkContainer.on("mouseleave", function() {
      $workLink.removeClass('js-text-white');
      $(this).children($workLink).removeClass('js-text-outline');
      $hoverDesc.removeClass('js-show');
      $hamburger.removeClass('js-icon-white');
      $footer__container.removeClass('js-hide');
    })
  }
}

export default Homepage;
