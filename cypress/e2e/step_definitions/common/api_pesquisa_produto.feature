Feature: api_pesquisa_produto

    Verificar pesquisar produtos eletrônicos no site Advantage Shopping.


    Scenario: Verificar lista de produtos conforme sua busca

        Given que eu preencho o campo name do produto desejado "Laptop"
        When eu acesso o Get request /api/v1/products/search
        Then todos os produtos são exibidos
        And o response exibe com 200
# Scenario: Verificar updade de imagem de produto
#     Given eu verifico os dados desse produto
#     When atualizo a imagem
#     And atualizo o seu id
#     Then serviço será atualizado para 200