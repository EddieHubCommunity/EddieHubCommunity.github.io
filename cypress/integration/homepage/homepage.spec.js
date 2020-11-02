/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I open the website", ()=>{
    cy.visit('http://localhost:3000')
})

Then('I see "Eddie Jaoude Community" in the title', ()=> {
    cy.title().should('include', 'Eddie Jaoude Community')
})

Given("I open the website", ()=>{
    cy.visit('http://localhost:3000')
})

Then('I see "projects" in "#projects" with a "id"', () => {
    cy.get("#projects").should("include", "projects")
})

Given("I open the website", ()=>{
    cy.visit('http://localhost:3000')
})

Then('I see "/EddieBot" in "#projects a:first" with a "href"', () => {
    cy.get("#projects a:first").should("include", "/EddieBot")
})

Given("I open the website", ()=>{
    cy.visit('http://localhost:3000')
})

Then('I see "https://youtube.com/eddiejaoude?sub_confirmation=1" in "div.mt-6 a:first" with a "href"', () => {
    cy.get("div.mt-6 a:first").should("include", "https://youtube.com/eddiejaoude?sub_confirmation=1")
})

Given("I open the website", ()=>{
    cy.visit('http://localhost:3000')
})

Then('I see "http://github.com/EddieJaoudeCommunity" in "div.mt-6 a:nth-child(2)" with a "href"', () => {
    cy.get("div.mt-6 a:nth-child(2)").should("include", "http://github.com/EddieJaoudeCommunity")
})

Given("I open the website", ()=>{
    cy.visit('http://localhost:3000')
})

Then(' I see "https://discord.com/invite/jZQs6Wu" in "div.mt-6 a:nth-child(3)" with a "href"', () => {
    cy.get("div.mt-6 a:nth-child(3)").should("include", "https://discord.com/invite/jZQs6Wu")
})