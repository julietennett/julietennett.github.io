class ImageHover {
  constructor() {
    this.scrollImage();
  }

  scrollImage() {
    let $image = $('.scroll-image');
    let $pageSection = $('.page-section');

    $image.mousemove( function(evt) {
      let xPos = evt.pageX;//works thank god
      // console.log(evt.pageX);
      // console.log(xPos);
      let imageLength = '4372';
      // let xTest = 3;

      $(this).children($pageSection).css('background-position-x',  function() {
        return - (xPos * imageLength) + '%';
      });
    });
  }


}

export default ImageHover;
