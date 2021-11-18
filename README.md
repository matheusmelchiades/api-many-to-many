# api-many-to-many

Este é um simples exemplo de uma API no contexto de relação N:N, entre duas entidades.

# DIAGRAMA

Diagrama da aplicação

![image](https://user-images.githubusercontent.com/29670119/142268459-dc990ca7-6630-481f-b1b6-2e1bc487e6e9.png)


# Rotas

| metodo | rota                                   | descrição                                                        |
| ------ | -------------------------------------- | ---------------------------------------------------------------- |
| GET    | /users                                 | retorna todos os usuarios                                        |
| GET    | /users/<user_id>                       | retorna dados do usuario requisitado pelo id                     |
| GET    | /users/<user_id>/products              | retorna todos os produtos vinculados ao usuario                  |
| POST   | /users                                 | cria um usuario, retornando os dados do usuario com id           |
| POST   | /users/<user_id>/products/<product_id> | cria uma relação entre usuario e produto                         |
| GET    | /products                              | retorna todos os produtos                                        |
| GET    | /products/<product_id>                 | retorna dados do produto requisitado pelo id                     |
| GET    | /products/<product_id>/users           | retorna todos usuarios vinculados ao produto requisitado pelo id |
| POST   | /products                              | cria um produto, retornando os dados do produto com id           |

<br/>

# Arquitetura

```shell
├── api
│   ├── controllers
│   ├── models
│   ├── routes
│   └── index.js
├── config
│   └── api.json
├── database
└── server.js
```

#### API

A camada da aplicação é agrupada por tres camadas, são elas: controllers, models e routes. Dentro de cada grupo há um contexto reference a regra de negocio.

- ##### controller

  Responsavel por estrutuação ou destruturação dos dados no fluxo da entrada e saida de uma requisição, de acordo com o destino do mesmo.

- ##### models

  Camada que terá acesso a toda modelagem da aplicação e acesso ao banco. Portanto é responsavel por manipular os dados.

- ##### routes

  Camada onde irá destinguir o roteamento do API, de acordo com seus contextos. Também pode se adicionar validação de dados no fluxo de entrada, como validação de parametros e requsitos que tal rota permitira.

#### Config

Cada arquivo, dentro da pasta, é nomeado por um contexto da aplicação.
Como por exemplo [apiConfig](./config/api.json)

```json
{
  "hostname": "localhost", // host onde o servidor irá servir.
  "port": 8080 // porta referente onde servidor irá escutar.
}
```
