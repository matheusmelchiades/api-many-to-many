# api-many-to-many

This is a simple example to relationship between entities. (Many to Many, N:N)

# DIAGRAMA

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
