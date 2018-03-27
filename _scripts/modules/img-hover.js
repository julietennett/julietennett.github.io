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
        return - (xPerc * 100) + '%';
      });
    });
  }

  scrollImageXY() {
    let $imageXY = $('.hover-image-xy');
    let $pageSection = $('.page-section');

    $imageXY.mousemove( function(evt) {
      let xPos = evt.pageX;//works thank god
      let yPos = evt.pageY;
      let pageW = $(document.body).width();
      let xPerc = xPos / pageW;
      let yPerc = yPos / pageW;


      $(this).children($pageSection).css('background-position-x',
      function() {
        return xPerc * 100 + '%';
      });
      $(this).children($pageSection).css('background-position-y',
      function() {
        return yPerc * 100 + '%';
      });
    });
  }


}

export default ImageHover;
