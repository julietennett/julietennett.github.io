class About {
  constructor() {
    this.changeFact();
  }

  changeFact() {
    let $aboutText = $(".about__text");

    $aboutText.on("click", function () {
      console.log('i am working');
      $aboutText.text('butts');
      console.log($aboutText.text());
    });

  }
}

export default About;
