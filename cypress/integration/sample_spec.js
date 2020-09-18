describe("My First Test", () => {
  it("Visits a website", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type");
  });
});
