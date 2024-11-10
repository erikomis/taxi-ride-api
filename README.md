# API de Corridas 🚗

Uma API de gerenciamento de corridas, onde passageiros podem solicitar corridas, motoristas podem aceitar e finalizar essas corridas, e o status da corrida é atualizado conforme o progresso.

## Funcionalidades

- **Cadastro de Passageiros e Motoristas**
- **Solicitação de Corrida**: Passageiros podem solicitar corridas, que inicialmente ficam com o status "Aguardando Motorista".
- **Atualização de Status da Corrida**:
  - "Em Andamento" (quando um motorista aceita a corrida)
  - "Finalizada" (quando a corrida é concluída)

## Tecnologias

- **NestJS** - Estrutura principal para construir a API
- **Node.js** - Ambiente de execução do JavaScript
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Contêinerização da aplicação
- **Docker Compose** - Gerenciamento de múltiplos contêineres

## Endpoints

| Método | Endpoint      | Descrição                                  |
|--------|---------------|--------------------------------------------|
| POST   | /passengers   | Cadastrar um passageiro                    |
| POST   | /drivers      | Cadastrar um motorista                     |
| POST   | /rides        | Criar uma nova corrida                     |
| PATCH  | /rides        | Atualizar o status de uma corrida          |
| GET    | /rides/:id    | Listar uma corrida por ID                  |

### Regras Básicas de Negócio

- **Criação de Corrida**: Uma corrida só pode ser criada se o passageiro existir.
- **Atualização de Status**:
  - Alterar o status para "Em andamento" é permitido apenas se a corrida estiver em "Aguardando Motorista" e o ID do motorista for informado.
  - Alterar o status para "Finalizada" é permitido apenas se a corrida estiver em "Em Andamento".

### Exemplo de Fluxo

1. Um passageiro é cadastrado.
2. Um motorista é cadastrado.
3. O passageiro solicita uma corrida.
4. O motorista inicia a corrida e a finaliza.

## Estrutura do Projeto



## Configuração

### Pré-requisitos

- Docker e Docker Compose instalados
- Node.js e npm instalados

### Configuração do Banco de Dados

Certifique-se de que as configurações do banco de dados no `docker-compose.yml` e `typeorm-config.service.ts` estejam corretas.

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```plaintext
NODE_ENV=development

# Application port
PORT=7272

TYPEORM_LOG=false
TYPEORM_SYNC=true


APP_NAME="api-de-corridas-de-taxi"
APP_SECRET="16307327-e2e8-4808-9eb3-a5a14170f3cd"
APP_URL="http://localhost:7272"


THROTTLE_LIMIT=800


POSTGRES_URI="postgres://postgres:yourpassword@localhost:5432/api"

```


## Execução

### Inicialização com Docker

Para construir e executar os contêineres, utilize o comando:

```bash
docker-compose up --build
```
A aplicação estará disponível em http://localhost:PORT


### Acesso ao Swagger
Após iniciar a aplicação, a documentação Swagger estará disponível em:

``` bash

http://localhost:port/api

```

Esse endereço fornece uma interface interativa onde é possível testar os endpoints diretamente e visualizar detalhes das requisições e respostas.