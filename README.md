# Challenge Alura Back-end 6 edição

> :construction: Projeto em construção :construction:

## O que é um challenge
São 4 semanas de desafios propostos pela plataforma de ensino Alura com o objetivo de praticar construindo um projeto. Toda semana são disponibilizados desafios e o aluno deve usar o material de apoio fornecido a cada semana para resolver o desafio proposto. 

### Projeto
Essa edição tem como objetivo construir uma api para adoção de pets. 

### Desafios de cada semana
- [X] <b>1ª semana</b> - CRUD de tutores e testes de api utilizando Postman
   - [X] Retornar tutores
   - [X] Retornar um tutor
   - [X] Cadastrar tutor
   - [X] Atualizar tutor
   - [X] Deletar tutor
   - [X] Testes Postman

- [ ] <b>2ª semana</b> - Relacionamento entre entidades e engenharia de software.

- [ ] <b>3ª e 4ª semana</b> - Autenticação, testes e deploy

## Tecnologias utilizadas
[NodeJs](https://laravel.com/), MySql, Express e Sequelize. 

## Inicializando o projeto

1) Instalando dependências
```
npm install
```

2) Rodando servidor na pasta api
```
npm start
```

## Padrão
O padrão de formato utilizado é o Json tanto para requisições como resposta.

## URL Base
 > http://127.0.0.1:8000

## Rotas

### Cabeçalhos
Todas as rotas devem receber os cabeçalhos:
| Cabeçalho | Valor | 
| --- | --- | 
| Accept | application/json |

### 1 Tutor
#### 1.1 Retornar tutores
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /tutors | Retornar todas os tutores | - | - |

![Tutor](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/get_tutors.jpg)

#### 1.2 Retornar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /tutors/{id} | Retornar um tutor por id | - | - |

![Tutor](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/get_tutor.jpg)

#### 1.3 Cadastrar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /tutors | Cadastrar um tutor | <pre>{<br> "name": "Daniela",<br> "email": "daniela@teste.com.br",<br> "password": "123456"<br>}</pre> | - |

##### 1.3.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|name | string | Obrigatório | 
|email | string | Obrigatório | 
|password | string | Obrigatório | 

![Tutor](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/post_tutors.jpg)

#### 1.4 Atualizar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|PUT | /tutors/{id} |Atualizar um tutor por id | <pre>{<br> "name": "Ana",<br> "email": "ana@teste.com.br",<br> "password": "654321"<br>}</pre> | - |

##### 1.4.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|name | string | Obrigatório | 
|email | string | Obrigatório | 
|password | string | Obrigatório | 

![Tutor](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/update_tutor.jpg)

#### 1.5 Deletar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /tutord/{id} |Deletar um tutor por id | - | - |

![Tutor](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/delete_tutor.jpg)

### 2 Abrigos
#### 2.1 Retornar abrigos
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /shelters | Retornar todas os abrigos | - | - |

![Shelter](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/get_shelters.jpg)

#### 2.2 Retornar um abrigo
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /shelters/{id} | Retornar um abrigo por id | - | - |

![Shelter](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/get_shelter.jpg)

#### 2.3 Cadastrar um abrigo
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /shelters | Cadastrar um abrigo | <pre>{<br> "name": "Daniela",<br> "email": "daniela@teste.com.br",<br> "password": "123456"<br>}</pre> | - |

##### 2.3.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|name | string | Obrigatório | 
|email | string | Obrigatório | 
|password | string | Obrigatório | 

![Shelter](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/post_shelters.jpg)

#### 2.4 Atualizar um abrigo
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|PUT | /shelters/{id} |Atualizar um abrigo por id | <pre>{<br> "name": "Ana",<br> "email": "ana@teste.com.br",<br> "password": "654321"<br>}</pre> | - |

##### 2.4.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|name | string | Obrigatório | 
|email | string | Obrigatório | 
|password | string | Obrigatório | 

![Shelter](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/update_shelter.jpg)

#### 2.5 Deletar um abrigo
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /shelterd/{id} |Deletar um abrigo por id | - | - |

![Shelter](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/delete_shelter.jpg)

### 3 Pets
#### 3.1 Retornar pets
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /pets | Retornar todas os pets | - | - |

![Pet](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/get_pets.jpg)

#### 3.2 Retornar um pet
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /pets/{id} | Retornar um pet por id | - | - |

![Pet](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/get_pet.jpg)

#### 3.3 Cadastrar um pet
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /pets | Cadastrar um pet | <pre>{<br> {"shelter_id": 1,<br>"name": "Doguinho",<br>"description": "Muito carinhoso",<br>"adopted": false,<br>"age": 2,<br>"address": "rua 1",<br>"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktXg5_v8-L9AslphhrFvphE12SWkGl-_Jig&usqp=CAU"}<br>}</pre> | - |

##### 3.3.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|name | string | Obrigatório | 
|shelter_id | inteiro | Obrigatório | 
|description | string | Obrigatório | 
|adopted | booleano | Obrigatório | 
|age | inteiro (meses) | Obrigatório | 
|address | string | Obrigatório | 
|image | string | Obrigatório | 

![Pet](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/post_pet.jpg)

#### 3.4 Atualizar um pet
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|PUT | /pets/{id} |Atualizar um pet por id | <pre>{<br> {"shelter_id": 1,<br>"name": "Doguinho",<br>"description": "Muito carinhoso",<br>"adopted": false,<br>"age": 2,<br>"address": "rua 1",<br>"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktXg5_v8-L9AslphhrFvphE12SWkGl-_Jig&usqp=CAU"}<br>}</pre> | - |

##### 3.4.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|name | string | Obrigatório | 
|shelter_id | inteiro | Obrigatório | 
|description | string | Obrigatório | 
|adopted | booleano | Obrigatório | 
|age | inteiro (meses) | Obrigatório | 
|address | string | Obrigatório | 
|image | string | Obrigatório | 

![Pet](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/update_pet.jpg)

#### 3.5 Deletar um pet
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /petd/{id} |Deletar um pet por id | - | - |

![Pet](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/delete_pet.jpg)

### 4 Adoções
#### 4.1 Cadastrar uma adoção
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /adoptions | Cadastrar um abrigo | <pre>{<br> "pet_id": 1,<br> "tutor_id": 1,<br> "date": "2023-04-07"<br>}</pre> | - |

##### 4.1.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|pet_id | inteiro | Obrigatório | 
|tutor_id | inteiro | Obrigatório | 
|date | string no formato YYYY-MM-DD | Obrigatório | 

![Adoption](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/post_adoptions.jpg)

#### 4.2 Deletar uma adoção
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /adoptions/{id} |Deletar um pet por id | - | - |

![Adoption](https://github.com/DaniPoletto/challenge-alura-back-end-6-nodejs/blob/main/img/delete_adoptions.jpg)
