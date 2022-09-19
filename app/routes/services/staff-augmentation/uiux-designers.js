import Route from '@ember/routing/route';
import { UI_UX } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationUiuxDesignersRoute extends Route {
  @service headData;
  async model() {
    const uiuxDesignersData = UI_UX;
    return { uiuxDesignersData };
  }

  beforeModel() {
    this.headData.title = ' Best UI UX Designer Service Provider Noida | Primathon';
    this.headData.description =
      'If you are looking to hire professional UI designer Gurgaon then you happy to know that Primathon provides the professional UX designer service company India.';
    this.headData.keywords =
      'hire professional ui designer gurgaon best ux designer service provider company best ui ux designer service provider noida professional ux designer service company affordable ui ux designing service delhi';
  }
}
