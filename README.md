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
 > https://challenge-alura-back-end-5-laravel-gi71.vercel.app/api/

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
|GET | /categorias | Retornar todas as categorias | - | - |

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/get_categorias.jpg)

#### 1.2 Retornar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|GET | /categorias/{id} | Retornar uma categoria por id | - | - |

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/get_categoria.jpg)

#### 1.3 Cadastrar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|POST | /categorias | Cadastrar uma categoria | <pre>{<br> "titulo": "Laravel",<br> "cor": "#ffffff"<br>}</pre> | - |

##### 1.3.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|titulo | string | Obrigatório | 
|cor | string | Obrigatório | 

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/post_categoria.jpg)

#### 1.4 Atualizar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|PUT | /categorias/{id} |Atualizar uma categoria por id | <pre>{<br> "titulo": "Laravel",<br> "cor": "#ffffff",<br>}</pre> | - |

##### 1.4.1 Campos

| Nome | Tipo | Descrição | 
| --- | --- | --- | 
|titulo | string | Obrigatório | 
|cor | string | Obrigatório | 

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/update_categoria.jpg)

#### 1.5 Deletar um tutor
| Método | Rota | Descrição | BODY PARAMS | QUERY PARAMS |
| --- | --- | --- | --- | --- |
|DELETE | /categorias/{id} |Deletar uma categoria por id | - | - |

![Video](https://github.com/DaniPoletto/challenge-alura-back-end-5-laravel/blob/main/imagens_readme/delete_categoria.jpg)
