import { PaapPage } from './app.po';

describe('paap App', () => {
  let page: PaapPage;

  beforeEach(() => {
    page = new PaapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
