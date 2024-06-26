import Controller from '@ember/controller';

export default class ServicesStaffAugmentationAndroidDevelopersController extends Controller {
  get androidDevelopersTitle() {
    return this.model.androidDevelopersData.title;
  }

  get androidDeveloperSubHeading() {
    return this.model.androidDevelopersData.sub_heading;
   }
  
  get androidDevelopersData() {
    return this.model.androidDevelopersData.data;
  }

  get androidDeveloperAbout() {
    return this.model.androidDevelopersData.about;
  };

  get androidDeveloperBg() {
    return this.model.androidDevelopersData.bg;
  };

  get androidDeveloperCircularList() {
    return this.model.androidDevelopersData.circular_list;
  };
  
};
