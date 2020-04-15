import { AppOnePage } from './app.po';

describe('app-one App', function() {
  let page: AppOnePage;

  beforeEach(() => {
    page = new AppOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
