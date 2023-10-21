# Sistema de Avaliação do Inova Week

## Grupo

- [Arycia](https://github.com/Aryciacp)
- [Icaro](https://github.com/Icaro-tme)
- [João](https://github.com/joaovitor10br)
- [Vitor](https://github.com/OCVitin)

## Descrição

O projeto tem como objetivo modelar e implementar um sistema para avaliar estandes do evento Inova Week, onde grupos de alunos apresentam seus projetos em datas e horários determinados. O sistema permite que alunos e professores avaliem os estandes de acordo com critérios específicos, garantindo que um avaliador específico não avalie o mesmo estande mais de uma vez.

## Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Modelagem de Dados**: Prisma

## Estrutura de Modelagem (UML)

<img src="/diagrama_de_classe.png">

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

## Exemplos de body para request

```
localhost:3000/estandes
{
  "nomeGrupo": "Grupo 1",
}
```

```
localhost:3000/alunos:
{
  "nome": "Maria",
  "matricula": "2019001111",
  "curso": "Engenharia de Software",
  "estandeId": 1
}
```

```
localhost:3000/professores:
{
  "nome": "João",
  "matricula": "2019002222",
  "area": "Ciência da Computação"
}
```

```
localhost:3000/avaliacoes:
{
  "idAluno": 1,
  "estandeId": 1
}
```

```
localhost:3000/avaliacoes:
{
  "idProf": 1,
  "estandeId": 1
}
```

```
localhost:3000/criterios:
{
  "nome": "Falatória",
  "descricao": "Avaliação da falatória do grupo",
  "nota": 10,
  "avaliacaoId": 1
}
```

```
localhost:3000/criterios:
{
  "nome": "Inovação",
  "descricao": "Avaliação da inovação do grupo",
  "nota": 10,
  "avaliacaoId": 1
}
```

```
localhost:3000/criterios:
{
  "nome": "Falatória",
  "descricao": "Avaliação da falatória do grupo",
  "nota": 10,
  "avaliacaoId": 2
}
```

```
localhost:3000/criterios:
{
  "nome": "Inovação",
  "descricao": "Avaliação da inovação do grupo",
  "nota": 10,
  "avaliacaoId": 2
}
```
