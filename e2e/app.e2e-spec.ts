import { Ng2TodolistPage } from './app.po';

describe('ng2-todolist App', () => {
  let page: Ng2TodolistPage;

  beforeEach(() => {
    page = new Ng2TodolistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
