import { TestForIbemsCIPage } from './app.po';

describe('test-for-ibems-ci App', () => {
  let page: TestForIbemsCIPage;

  beforeEach(() => {
    page = new TestForIbemsCIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
