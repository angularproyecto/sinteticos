import { SinteticosPage } from './app.po';

describe('sinteticos App', function() {
  let page: SinteticosPage;

  beforeEach(() => {
    page = new SinteticosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
