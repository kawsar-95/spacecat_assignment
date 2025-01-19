import RSEndurancePage from '../support/pages/rsEndurancePage';

describe('RSEndurance Site Test', () => {
  const rsPage = new RSEndurancePage();

  it('Visits the homepage', () => {
    rsPage.visit();
    rsPage.verifyVisibleLogo();
    rsPage.clickMenu();
    rsPage.goToFindCoach();
    rsPage.closePopup();
    cy.contains('One-on-One Coaching Tailored to You');
    rsPage.clickMenu();
    rsPage.goToTrainingPlans();
    cy.contains('Training Plans');
    rsPage.clickMenu();
    rsPage.goToSubscription();
    rsPage.closePopup();
    cy.contains('Subscription Plan');
    rsPage.clickMenu();
    rsPage.goToAbout();
    rsPage.closePopup();
    cy.contains('About Us');
    rsPage.clickMenu();
    rsPage.goToMedia();
    rsPage.closePopup();
    cy.contains('Explore. Inspire. Achieve.');
    rsPage.closePopup();
    rsPage.clickMenu();
    rsPage.goToBlog();
    cy.contains('Latest Blog');
    rsPage.gotoHome();
    rsPage.clickMenu();
    cy.contains('Maximize Your Training Results');
  });
});