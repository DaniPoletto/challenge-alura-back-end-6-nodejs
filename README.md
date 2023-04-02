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

2) Rodando servidor na pasta server
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

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/get_categorias.jpg)

#### 1.2 Retornar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /tutors/{id} | Retornar um tutor por id | - | - |

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/get_categoria.jpg)

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

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/post_categoria.jpg)

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

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/update_categoria.jpg)

#### 1.5 Deletar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /tutord/{id} |Deletar um tutor por id | - | - |

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/delete_categoria.jpg)
