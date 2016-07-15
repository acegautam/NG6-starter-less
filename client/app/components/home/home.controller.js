class HomeController {
  /* @ngInject */

  constructor(HomeService) {
    this.name = 'Home Controller';
    this.homeService = HomeService;
    // this.init();
  }

  init(){
    this.homeService.getInfo()
      .then((response) => {
        this.info = response.data;
      });
  }
}

export default HomeController;
