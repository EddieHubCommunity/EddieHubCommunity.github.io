import { Given } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://127.0.0.1:8080/';
Given('I open the website', () => {
  // eslint-disable-next-line no-undef
  cy.visit(url);
});
