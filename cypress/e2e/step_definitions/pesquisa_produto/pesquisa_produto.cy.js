
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que eu acesse a página Advantage Shopping", () => {
    cy.visit(Cypress.env('baseUrl'))
});
When("eu clico na lupa de pesquisa", () => {
    cy.get('#menuSearch').click();
});
And("digito Laptop no campo de pesquisa", () => {
    cy.get('mobile_search').should('be.visible')
    cy.get('#autoComplete').should('be.visible').type('laptop')
    cy.wait(3000)
});
Then("as opções de Laptops são exibidos com sucesso", () => {
    cy.get('[href="#/product/6"] > img').click();
});
