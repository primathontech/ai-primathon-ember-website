import EmberRouter from '@ember/routing/router';
import config from 'primathon-ember-web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('careers');
  this.route('open-position');
  this.route('about-us');
  this.route('services', function () {
    this.route('staff-augmentation', function () {
      this.route('frontend-developers');
      this.route('product-managers');
      this.route('backend-developers');
      this.route('product-designers');
      this.route('full-stack-developers');
      this.route('quality-analysts');
    });
    this.route('end-to-end-products', function () {
      this.route('booking-platforms');
      this.route('shopify-stores');
      this.route('dashboard-and-data-visualization');
      this.route('admin-panels-and-cms');
      this.route('web-and-mobile-app-development');
      this.route('ai-ml-based-recommendation-engines');
      this.route('erc20-token');
      this.route('smart-contract');
    });
    this.route('build-and-manage');
  });
  this.route('case-studies');
  this.route('job-desc');
  this.route('not-found', { path: '/*path' });
});

Router.reopen({
  // eslint-disable-next-line ember/no-function-prototype-extensions
  doSomethingOnUrlChange: function () {
    window?.gtag?.('config', 'G-JE8T1MS4RZ', {
      page_path: this.url,
    });
  }.on('didTransition'),
});
