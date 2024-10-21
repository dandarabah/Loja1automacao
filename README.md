Site da página: https://advantageonlineshopping.com/#/


Swagger UI: https://www.advantageonlineshopping.com/api/docs/


Configuração de ambiente cypress:

 git init: para iniciar o repositório git

 
 npm init: para iniciar o projeto 
 **colocar a versão 2.0.0

 
 npm install cypress@13.14.2 --save-dev 


Configuração da biblioteca Cucumber:
 
Instalação do plugin: npm install --save-dev cypress-cucumber-preprocessor



Configuração do ambiente


![image](https://github.com/user-attachments/assets/0b989058-d7d7-49c9-bb62-fdb673495ac8)


const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/common/*.feature"
  },
});




![image](https://github.com/user-attachments/assets/fd45ccad-199d-410d-966f-d13d2b29c58f)

  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "stepDefinitions": "cypress/e2e/step_definitions/common"


** Na pasta "common" ficaram os arquivos .feature

![image](https://github.com/user-attachments/assets/6d97a7bb-e818-4769-bae4-62e63223409e)



** Na pasta "step_definitions" ficaram os arquivos .js
![image](https://github.com/user-attachments/assets/522083b7-c2bb-4ddb-bc2e-ad9a8f906e64)


 Configurar o arquivo cypress.config.js conforme a figura abaixo.
![image](https://github.com/user-attachments/assets/6ccb6b27-8994-44b8-9f22-ff6e5a0a885f)

const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/common/*.feature"
  },
});




 Gerar relatório em html com o framework Mocha:

 
 npm install --save-dev mochawesome



Rodar o comando npx cypress run --reporter mochawesome para gerar o relatório.
