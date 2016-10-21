import { SheferMobilePage } from './app.po';

describe('shefer-mobile App', function() {
  let page: SheferMobilePage;

  beforeEach(() => {
    page = new SheferMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
