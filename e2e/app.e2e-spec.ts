import { OnlineVendingPage } from './app.po';

describe('online-vending App', () => {
  let page: OnlineVendingPage;

  beforeEach(() => {
    page = new OnlineVendingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
