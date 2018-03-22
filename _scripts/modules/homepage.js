class Homepage {
  constructor() {
    this.workLinksColor();
  }

  workLinksColor() {
    var $linkContainer = $(".link--container");
    var $workLink = $(".work__link");
    var $hamburger = $(".nav__hamburger--icon");
    var $hoverDesc = $(".hover__description");
    var $footer__container = $(".footer__container");

    $linkContainer.on("mouseenter", function() {
      $workLink.addClass('text-white');
      $(this).children($workLink).addClass('text-outline');
      $(this).children($workLink).removeClass('text-white');
//       $(this).children($hoverDesc).css('opacity', '1');
      $(this).children($hoverDesc).addClass('js-show');
      $hamburger.addClass('icon-white');
      $footer__container.addClass('hide');
    })
    $linkContainer.on("mouseleave", function() {
      $workLink.removeClass('text-white');
      $(this).children($workLink).removeClass('text-outline');
//       $hoverDesc.css('opacity', '0');
      $hoverDesc.removeClass('js-show');
      $hamburger.removeClass('icon-white');
      $footer__container.removeClass('hide');
    })
  }
}

export default Homepage;
