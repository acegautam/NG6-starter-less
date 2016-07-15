class AboutController {
  /* @ngInject */

  constructor(AboutService) {
    this.name = 'About Controller';
    this.aboutService = AboutService;
    // this.init();
  }

  init(){
    this.aboutService.getInfo()
      .then((response) => {
        this.info = response.data;
      });
  }
}

export default AboutController;
