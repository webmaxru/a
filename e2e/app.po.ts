export class ClassroomPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('classroom-app h1')).getText();
  }
}
