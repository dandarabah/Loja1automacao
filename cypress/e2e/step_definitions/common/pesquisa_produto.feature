Feature: pesquisa_produto

    Eu como usuário quero pesquisar produtos eletrônicos no site Advantage Shopping.

    Background:

        Given que eu acesse a página Advantage Shopping

    Scenario: Pesquisar produto

        When eu clico na lupa de pesquisa
        And digito Laptop no campo de pesquisa
        Then as opções de Laptops são exibidos com sucesso.