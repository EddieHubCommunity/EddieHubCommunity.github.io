import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://127.0.0.1:8080/";
Given("I open website", () => {
  cy.visit(url);
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});
