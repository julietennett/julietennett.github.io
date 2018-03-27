class ImageHover {
  constructor() {
    this.scrollImageX();
    this.scrollImageXY();
  }

  scrollImageX() {
    let $image = $('.hover-image-x');
    let $pageSection = $('.page-section');

    $image.mousemove( function(evt) {
      let xPos = evt.pageX;//works thank god
      let pageW = $(document.body).width();
      let xPerc = xPos / pageW;


      $(this).children($pageSection).css('background-position-x',  function() {
        return - (xPerc * pageW);
      });
    });
  }

}

export default ImageHover;
