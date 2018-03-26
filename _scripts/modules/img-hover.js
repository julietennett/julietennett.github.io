class ImageHover {
  constructor() {
    this.scrollImage();
  }

  scrollImage() {
    let $image = $('.scroll-image');
    let $pageSection = $('.page-section');

    $image.hover( function () {
      $(this).children($pageSection).css('background-position', '30%, 0');
    });
  }

}

export default ImageHover;
