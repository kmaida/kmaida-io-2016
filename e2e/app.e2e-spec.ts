import { ReStartAngular2Page } from './app.po';

describe('reStart-angular2 App', function() {
  let page: ReStartAngular2Page;

  beforeEach(() => {
    page = new ReStartAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
