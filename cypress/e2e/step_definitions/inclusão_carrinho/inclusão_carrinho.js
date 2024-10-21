import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given("que eu acesse a página Advantage Shopping", () => {
    cy.visit('https://advantageonlineshopping.com/#/')

    When("eu clico na lupa de pesquisa", () => {
        cy.get('menuSearch').click();
    })
    And("digito Laptop no campo de pesquisa", () => {
        cy.get('mobile_search').should('be.visible')
        cy.get('menuSearch').type('laptop')
        cy.get('menuSearch').click();
    })
    And("as opções de Laptops são exibidos", () => {
        cy.contains('a', 'titleItemsCount ng-binding').should('be.visible')
    })
    And("ao selecionar um produto", () => {
        cy.contains('smobileDescription').should('be.visible')
    })
    And("clicar no botão ADD TO CART", () => {
        cy.button('save_to_cart').click();
    })
    Then("o produto é adicionado no carrinho com sucesso", () => {
        cy.get('menuCart').click();
        cy.title('h', 'roboto-regular center sticky fixedImportant ng-binding').should('eq',
            'SHOPPING CART')
    })
});