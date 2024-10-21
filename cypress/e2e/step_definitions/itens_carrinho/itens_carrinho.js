import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que eu acesse a página Advantage Shopping", () => {
    cy.visit('https://advantageonlineshopping.com/#/')

    When("eu clico no carrinho de compras", () => {
        cy.get('shoppingCartLink').click();
    })
    Then("o(s) iten(s) devem ser exibidos no carrinho", () => {
        cy.contains('h', 'roboto-regular center sticky fixedImportant ng-binding').should('be.visible')

    })
});