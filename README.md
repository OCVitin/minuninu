# Sistema de Avaliação do Inova Week

## Grupo



## Descrição

O projeto tem como objetivo modelar e implementar um sistema para avaliar estandes do evento Inova Week, onde grupos de alunos apresentam seus projetos em datas e horários determinados. O sistema permite que alunos e professores avaliem os estandes de acordo com critérios específicos, garantindo que um avaliador específico não avalie o mesmo estande mais de uma vez.

## Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Modelagem de Dados**: Prisma

## Estrutura de Modelagem (UML)

*Nota*: A modelagem UML completa será disponibilizada em breve.

## Features

1. **Cadastro de Estandes**: Permite o cadastro de estandes do evento, bem como os detalhes dos projetos associados a eles.
2. **Cadastro de Avaliadores**: Criação de perfis para alunos e professores que servirão como avaliadores.
3. **Avaliação de Estandes**: Os avaliadores podem dar notas aos estandes de acordo com critérios definidos.
4. **Restrição de Avaliação**: Garantir que um avaliador não avalie o mesmo estande mais de uma vez.

## Comandos de instalação e inicialização do TypeScript:

> ```npm init -y```
> 
> ```npm install typescript --save-dev```
> 
> ```npx tsc -init```

## Instalando dependências do Prisma

> ```npm install express --save```
> 
> ```npm i --save-dev @types/express```
> 
> ```npm install prisma --save-dev```
> 
> ```npx prisma init --datasource-provider sqlite```
>
> ```npx prisma migrate dev --name init```


## Comandos de teste de API:

```bash
# Post
curl -X POST http://localhost:3000/estandes -H "Content-Type: application/json" -d '{"nomeGrupo": "Grupo 1"}'

curl -X POST http://localhost:3000/alunos -H "Content-Type: application/json" -d '{"nome": "Maria", "matricula": "2019001111", "curso": "Engenharia de Software", "estandeId": 1}'

curl -X POST http://localhost:3000/professores -H "Content-Type: application/json" -d '{"nome": "João", "matricula": "2019002222", "area": "Ciência da Computação"}'

curl -X POST http://localhost:3000/avaliacoes -H "Content-Type: application/json" -d '{"idAluno": 1, "estandeId": 1}'

curl -X POST http://localhost:3000/avaliacoes -H "Content-Type: application/json" -d '{"idProf": 1, "estandeId": 1}'

curl -X POST http://localhost:3000/criterios -H "Content-Type: application/json" -d '{"nome": "Falatória", "descricao": "Avaliação da falatória do grupo", "nota": 10, "avaliacaoId": 1}'

curl -X POST http://localhost:3000/criterios -H "Content-Type: application/json" -d '{"nome": "Inovação", "descricao": "Avaliação da inovação do grupo", "nota": 10, "avaliacaoId": 1}'

curl -X POST http://localhost:3000/criterios -H "Content-Type: application/json" -d '{"nome": "Falatória", "descricao": "Avaliação da falatória do grupo", "nota": 10, "avaliacaoId": 2}'

curl -X POST http://localhost:3000/criterios -H "Content-Type: application/json" -d '{"nome": "Inovação", "descricao": "Avaliação da inovação do grupo", "nota": 10, "avaliacaoId": 2}'

# Get all
curl http://localhost:3000/estandes

curl http://localhost:3000/alunos

curl http://localhost:3000/professors

curl http://localhost:3000/avaliacoes

curl http://localhost:3000/criterios

# Get por ID
curl http://localhost:3000/estandes/1

curl http://localhost:3000/alunos/1

curl http://localhost:3000/professors/1

curl http://localhost:3000/avaliacoes/1

curl http://localhost:3000/criterios/1


# Update por ID
curl -X PUT http://localhost:3000/estandes/1 -H "Content-Type: application/json" -d '{"nomeGrupo": "GrupoZAO 1"}'

curl -X PUT http://localhost:3000/alunos/1 -H "Content-Type: application/json" -d '{"nome": "MariaZAO", "matricula": "2019001111", "curso": "Engenharia de Software", "estandeId": 1}'

curl -X PUT http://localhost:3000/professors/1 -H "Content-Type: application/json" -d '{"nome": "JoãoZAO", "matricula": "2019002222", "area": "Ciência da Computação"}'

curl -X PUT http://localhost:3000/avaliacoes/1 -H "Content-Type: application/json" -d '{"idAluno": 1, "estandeId": 1}'

curl -X PUT http://localhost:3000/criterios/1 -H "Content-Type: application/json" -d '{"nome": "Falatória", "descricao": "Avaliação da falatória do grupo", "nota": 1, "avaliacaoId": 1}'

# Delete por ID
curl -X DELETE http://localhost:3000/estandes/1

curl -X DELETE http://localhost:3000/alunos/1

curl -X DELETE http://localhost:3000/professors/1

curl -X DELETE http://localhost:3000/avaliacoes/1

curl -X DELETE http://localhost:3000/criterios/1

```