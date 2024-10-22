import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que eu acesse a página Advantage Shopping", () => {
    cy.visit(Cypress.env('baseUrl'))
});
When("eu clico no carrinho de compras", () => {
    cy.get('#shoppingCartLink').click();
});
Then("o(s) iten(s) devem ser exibidos no carrinho", () => {
    cy.get('.sticky').should('be.visible')
});
