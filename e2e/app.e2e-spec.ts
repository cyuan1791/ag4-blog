import { Ag4Blog1Page } from './app.po';

describe('ag4-blog1 App', () => {
  let page: Ag4Blog1Page;

  beforeEach(() => {
    page = new Ag4Blog1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
