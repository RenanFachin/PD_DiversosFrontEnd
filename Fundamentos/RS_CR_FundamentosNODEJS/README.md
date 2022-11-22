# FUNDAMENTOS DE NODEJS
 O node JS é baseado no motorV8 do google

## Gerenciadores de pacotes (NPM e YARN)

- NPM é uma ferramenta que vem por padrão com o nodeJS
    - Com o NPM é possível **instalar pacotes** via repositórios online
    - Possui **gerenciamento de versões**
    - **Dependências** de **desenvolvimento** e de **produção**


### Instalando o NODEJS
No terminal:

```
npm init

ou

npm init -y
```

### Comandos do NODEJS no terminal
Verificando a versão instalada do node:
```
node -v
```

Rodando um arquivo com o node
```
node nomeDoArquivo.js
```

## Instalando o EXPRESS
```
npm install express
```

### O que é o EXPRESS?
- Express.js é um framework para desenvolvimento de backend

## Instalando o NODEMON
```
npm install nodemon --save-dev

```

### O que é o NODEMON?
É um **LIVE RELOAD**. Fica atualizando sempre que houver uma modificação no projeto.

## O que fazer quando pegar um projeto?
Sempre é necessário fazer a instalação de todos os pacotes do projeto, ou seja, toda a pasta NODE_MODULES.
Para isso, basta digitar:

```
npm i
```

E automaticamente toda as Dependências do projeto vão ser instaladas.