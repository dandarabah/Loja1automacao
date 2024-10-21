
import { Given } from 'cypress-cucumber-preprocessor/steps';

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
    Then("as opções de Laptops são exibidos com sucesso", () => {
        cy.contains('a', 'titleItemsCount ng-binding').should('be.visible')

    })
});