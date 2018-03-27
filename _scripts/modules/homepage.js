class Homepage {
  constructor() {
    this.$body = $('body');
    if (this.$body.hasClass('home')) {
      // this.workLinksColor();
      // this.backgroundImg();
      this.workLinkHover();
    }
   }

  workLinkHover() {
    //general link variables
    let $linkContainer = $('.link--container'); //container for all
    var $workLink = $(".work__link"); //a tag
    var $hoverDesc = $(".hover__description"); //description for proj
    //each project link (container)
    let $trailTag = $('.link--trailtag');
    let $videogame = $('.link--videogame');
    let $zealery = $('.link--zealery');
    let $illustrations = $('.link--illustrations');
    let $lacentrale = $('.link--lacentrale');
    let $hoverImg = $('.hover__img');
    //other variables on the page
    var $hamburger = $(".nav__hamburger--icon");
    var $footer__container = $(".footer__container");
    let $heroIntro = $(".hero__intro")

    $linkContainer.on('mouseenter',
      function () {
        $hoverImg.css("opacity", "1");
        $workLink.addClass('js-text-white');
        $(this).children($workLink).addClass('js-text-outline');
        $(this).children($hoverDesc).addClass('js-show');
        $hamburger.addClass('js-icon-white');
        $footer__container.addClass('js-hide');
        $heroIntro.css('opacity', '0');
      }
    );

    $linkContainer.on('mouseleave',
      function () {
        $hoverImg.css("background-image", "none");
        $hoverImg.css("opacity", "0");
        $workLink.removeClass('js-text-white');
        $(this).children($workLink).removeClass('js-text-outline');
        $hoverDesc.removeClass('js-show');
        $hamburger.removeClass('js-icon-white');
        $footer__container.removeClass('js-hide');
        $heroIntro.css('opacity', '1');
      }
    );

    $zealery.hover(function () {
      $hoverImg.css("background-image", "url(/img/home/work__link--zealery.png)");
      $hoverImg.css("background-size", "cover");
    });

    $videogame.hover(function () {
      $hoverImg.css("background-image", "url(/img/videogame/hero-background.png)");
      $hoverImg.css("background-size", "cover");
    });

    $trailTag.hover(function () {
      $hoverImg.css("background-image", "url(/img/trailtag/hero-background.png)");
      $hoverImg.css("background-size", "cover");
    });

    $illustrations.hover(function () {
      $hoverImg.css("background-image", "url(/img/illustrations/hero-background.png)");
      $hoverImg.css("background-size", "cover");
    });

    $lacentrale.hover(function () {
      $hoverImg.css("background-image", "url(/img/home/work__link--lacentrale.png)");
      $hoverImg.css("background-size", "cover");
    });

  }
}

export default Homepage;
