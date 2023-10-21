# Sistema de Avaliação do Inova Week

## Descrição

O projeto tem como objetivo modelar e implementar um sistema para avaliar estandes do evento Inova Week, onde grupos de alunos apresentam seus projetos em datas e horários determinados. O sistema permite que alunos e professores avaliem os estandes de acordo com critérios específicos, garantindo que um avaliador específico não avalie o mesmo estande mais de uma vez.

## Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Modelagem de Dados**: Prisma

## Estrutura de Modelagem (UML)

<img src="diagrama_de_classes.drawio">

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
