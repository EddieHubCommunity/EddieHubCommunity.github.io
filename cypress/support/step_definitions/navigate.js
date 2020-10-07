import { Given } from "cypress-cucumber-preprocessor/steps";
import os from 'os';

const url = `http://linux-rpqu:8080`;
Given("I open the website", () => {
  cy.visit(url);
});
