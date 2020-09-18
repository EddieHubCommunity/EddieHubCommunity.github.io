//What can we test on EddieWbesite?
//1.Visit url-Passed
//2/ Contains elements in the DOM:
//- Our Projects
//-link to discord bot
//3. Make an assertion: a way to test deeper if an element on the page works even after loading on the page
//3.1. Does EddieBot link leads to the repo? It fails the assertion test
//because the link belows to an external url , not within the same website.
//Which means that you can only test elements wihin your own website application

describe("My First Test", () => {
  it("Visits a website", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.contains("EddieBot");
    cy.contains("Eddie Jaoude Community website");
    //Should lead to a new URL which includes:
    cy.get("#projects a:first")
      .should("have.attr", "href")
      .and("include", "/EddieBot");
  });
});

//Next: Add Cucumber and get the same tests working
//With cucumber, code can be reused and only change code once and re-use it in other parts/pages
