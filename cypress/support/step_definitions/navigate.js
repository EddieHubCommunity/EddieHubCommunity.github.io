import { Given } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000/';
Given('I open the website', () => {
  // eslint-disable-next-line no-undef
  cy.visit(url);
});
