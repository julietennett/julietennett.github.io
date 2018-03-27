class ImageHover {
  constructor() {
    this.scrollImage();
  }

  scrollImage() {
    let $image = $('.hover-image-x');
    let $pageSection = $('.page-section');

    $image.mousemove( function(evt) {
      let xPos = evt.pageX;//works thank god
      let pageW = $(document.body).width();
      let xPerc = xPos / pageW;


      $(this).children($pageSection).css('background-position-x',  function() {
        return - (xPerc * 100) + '%';
      });
    });
  }


}

export default ImageHover;
