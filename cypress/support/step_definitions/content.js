/* eslint-disable no-undef */
import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see {string} in the title', (title) => {
  cy.title().should('include', title);
});

Then('I see {string} in {string} with a {string}', (content, target, attribute) => {
  cy.get(target) // #projects a:first
    .should('have.attr', attribute)
    .and('include', content);

});

// cy.contains("EddieBot");
// cy.contains("Eddie Jaoude Community website");
// //Should lead to a new URL which includes:
// cy.get("#projects a:first")
//   .should("have.attr", "href")
//   .and("include", "/EddieBot");
