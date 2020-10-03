import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:8080/";
Given("I open the website", () => {
  cy.visit(url);
});
