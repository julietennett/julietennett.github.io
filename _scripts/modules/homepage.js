class Homepage {
  constructor() {
    this.$body = $('body');
    if (this.$body.hasClass('home')) {
      this.workLinksColor();
      this.backgroundImg();
    }
   }

  backgroundImg() {
    let $linkContainer = $('.link--container');
    let $trailTag = $('.link--trailtag');
    let $unsent = $('.link--unsent');
    let $videogame = $('.link--videogame');
    let $zealery = $('.link--zealery');
    let $illustrations = $('.link--illustrations');
    let $lacentrale = $('.link--lacentrale');
    let $hoverImg = $('.hover__img');
    let $abtesting = $('.link--abtesting');

    $linkContainer.hover(
      function () {
        $hoverImg.css("opacity", "1");
      },
      function () {
        $hoverImg.css("background-image", "none");
        $hoverImg.css("opacity", "0");
      }
    )

    $abtesting.hover(function () {
      $hoverImg.css("background-image", "url(/img/home/work__link--abtesting.png)");
      $hoverImg.css("background-size", "cover");
    });


    $zealery.hover(function () {
      $hoverImg.css("background-image", "url(/img/home/work__link--zealery.png)");
      $hoverImg.css("background-size", "cover");
    });

    $unsent.hover(function () {
      $hoverImg.css("background-image", "url(/img/unsent/hero-background.png)");
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

  workLinksColor() {
    var $linkContainer = $(".link--container");
    var $workLink = $(".work__link");
    var $hamburger = $(".nav__hamburger--icon");
    var $hoverDesc = $(".hover__description");
    var $footer__container = $(".footer__container");
    let $heroIntro = $(".hero__intro")

    $linkContainer.hover(
      function () {
        $workLink.addClass('js-text-white');
        $(this).children($workLink).addClass('js-text-outline');
        $(this).children($hoverDesc).addClass('js-show');
        $hamburger.addClass('js-icon-white');
        $footer__container.addClass('js-hide');
        $heroIntro.css('opacity', '0');
      },
      function () {
        $workLink.removeClass('js-text-white');
        $(this).children($workLink).removeClass('js-text-outline');
        $hoverDesc.removeClass('js-show');
        $hamburger.removeClass('js-icon-white');
        $footer__container.removeClass('js-hide');
        $heroIntro.css('opacity', '1');
      }
    )
  }
}

export default Homepage;
