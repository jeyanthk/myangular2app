import { ClassprojectPage } from './app.po';

describe('classproject App', function() {
  let page: ClassprojectPage;

  beforeEach(() => {
    page = new ClassprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
