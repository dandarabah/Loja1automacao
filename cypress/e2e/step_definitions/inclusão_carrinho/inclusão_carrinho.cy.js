import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given("que eu acesse a página Advantage Shopping", () => {
    cy.visit(Cypress.env('baseUrl'))
});
When("eu clico na lupa de pesquisa", () => {
    cy.get(':nth-child(4) > .img').click();
});
And("digito Laptop no campo de pesquisa", () => {
    cy.get('#autoComplete').should('be.visible').type('laptop')
    cy.wait(5000)
});
And("as opções de Laptops são exibidos", () => {
    cy.get('.top6Products > .roboto-medium.ng-binding').should('be.visible')
});
And("ao selecionar um produto", () => {
    cy.get('[href="#/product/6"] > img').click();
});
And("clicar no botão ADD TO CART", () => {
    cy.get('.fixedBtn > .roboto-medium').click();
});
Then("o produto é adicionado no carrinho com sucesso", () => {
    cy.get('#shoppingCartLink').click();
    cy.get('.sticky > .ng-binding').should('be.visible')
});
