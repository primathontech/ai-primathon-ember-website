import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  _HOSTNAME = 'https://blog.primathon.in';
  _PAGE_SIZE = 3;
  _URL = `${this._HOSTNAME}/wp-json/wp/v2/posts?_embed&per_page=${this._PAGE_SIZE}`;

  async model() {
    // const p1 = fetch('/json-data/homepage/services.json');
    // const p2 = fetch('/json-data/homepage/services.json');
    // const p3 = fetch('/json-data/homepage/services.json');
    // const [serviceData, coreValueData, testimonialData] = await Promise.all([p1, p2, p3]);

    // console.log({ serviceData, coreValueData, testimonialData });

    const serviceData = await (await fetch('/json-data/homepage/services.json')).json();
    const coreValueData = await (await fetch('/json-data/homepage/core-value.json')).json();
    const testimonialData = await (await fetch('/json-data/homepage/testimonial.json')).json();
    const blogData = await (await fetch('/json-data/homepage/blog.json')).json();

    const blogResponse = (await (await fetch(this._URL)).json()).slice(0, 6);

    blogData['data'] = blogResponse.map((data) => {
      return {
        title: data.title.rendered,
        link: data.link,
        blogImageUrl: data._embedded['wp:featuredmedia']['0'].source_url,
        descriptionHtml: data.excerpt.rendered,
      };
    });

    return { serviceData, coreValueData, testimonialData, blogData };
  }
}
