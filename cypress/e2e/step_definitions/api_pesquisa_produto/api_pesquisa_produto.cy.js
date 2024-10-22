import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
const cy = require('cypress');

let searchName;
let searchQuantityPerEachCategory;

Given("que eu preencho o campo name do produto desejado {string}", (name) => {
    searchName = name;
});

When("eu acesso o Get request /api/v1/products/search", () => {
    cy.request({
        method: 'GET',
        url: '/api/v1/products/search',
        qs: { name: searchName },
        failOnStatusCode: false,
    }).as('searchRequest');
});

Then("todos os produtos são exibidos", () => {
    cy.wait('@searchRequest');
    const searchedProducts = JSON.parse(cy.get('@searchRequest').its('body'));
    // verificar todos os produtos 
    expect(searchedProducts).to.have.length.above(0);
    searchedProducts.forEach(product => {
        expect(product.name).to.include(searchName);
    });
});

And("o response exibe com 200", () => {
    cy.get('@searchRequest').its('status').should('eq', 200);
});





