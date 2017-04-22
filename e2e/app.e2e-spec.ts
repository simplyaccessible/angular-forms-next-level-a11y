import { AngularFormsNextLevelA11yPage } from './app.po';

describe('angular-forms-next-level-a11y App', () => {
  let page: AngularFormsNextLevelA11yPage;

  beforeEach(() => {
    page = new AngularFormsNextLevelA11yPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
