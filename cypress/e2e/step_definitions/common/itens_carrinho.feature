Feature: itens_carrinho

    Eu como usuário quero verificar o item selecionado no carrinho de compras.

    Background:

        Given que eu acesse a página Advantage Shopping

    Scenario: Validar os produtos incluídos no carrinho na tela de pagamento.

        When eu clico no carrinho de compras
        Then o(s) iten(s) devem ser exibidos no carrinho.