import { DolanBioPage } from './app.po';

describe('dolan-bio App', function() {
  let page: DolanBioPage;

  beforeEach(() => {
    page = new DolanBioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
