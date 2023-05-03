import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { FRONTEND } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationFrontendDevelopersRoute extends Route {
  @service headData;
  async model() {
    const frontendData = FRONTEND;
    const faqData = FAQ_DATA;
    return { frontendData, faqData };
  }

  beforeModel() {
    const title = 'Top Quality Front End Developers Solutions India | Primathon';
    const description =
      'Primathon provides the top quality front end developers solutions India. Our company is the top front end development company Delhi and Gurgaon cities.';
    const keywords =
      'hire the best front end developer noida best front end development services gurgaon top front end development company delhi affordable front end development services top quality front end developers solutions india ';

    this.headData.setData({ title, description, keywords });
  }
}