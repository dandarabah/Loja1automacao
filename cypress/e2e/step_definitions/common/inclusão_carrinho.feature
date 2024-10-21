Feature: inclusão_carrinho

    Eu como usuário que inserir um produto no carrinho de compras.

    Background:
        Given que eu acesse a página Advantage Shopping

    Scenario: Incluir produto no carrinho

        When eu clico na lupa de pesquisa
        And digito Laptop no campo de pesquisa
        And as opções de Laptops são exibidos
        And ao selecionar um produto
        And clicar no botão ADD TO CART
        Then o produto é adicionado no carrinho com sucesso.