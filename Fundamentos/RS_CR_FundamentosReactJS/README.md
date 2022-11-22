<div align="center">
  <img alt="Logo Explorer" title="Explorer" src="https://i.imgur.com/2IqqDoo.png">
</div>
<br>

# Fundamentos de REACTJS

Iniciando um projeto reactjs com vite pelo terminal
```
cd (arrasta pasta para dentro)
instalando o vite: npm create vite@latest

cd (nome do arquivo criado no npm vite)
npm install (para instalar a node_modules)
```

# PILARES DO REACTJS
- Componentes
- Funcionamento do react (spa)
- Props
- Estados

## COMPONENTES
O **react** se baseia em **componetização**, estes componentes possibilitam o **reaproveitamento** de código, **clean code** e maior **manutenibilidade** do código. <br>

- Componentes **são funções**
- Componentes só **retorna 1 elemento**

## FUNDAMENTOS DO REACT
O react funciona baseado na **estratégia de SPA** (Single Page Application).

- **index.html**
    - **div root**: seu conteúdo é alterado de forma dinâmica

## PROPS
**Componentes podem receber propriedades** e assim, deixar eles com uma **maior flexilidade** de uso. <br>

ex:
```jsx
export function Title (props){
    return(
        <h1>
            {props.title}
        </h1>
    )
}
```

## ESTADOS
React é **reativo**.
- Ciclos de renderização
- Princípio da imutabilidade (renderização performática)

ex:
```jsx
import {useState} from 'react'

const [name, setName] = useState('')

/*
- name: Conteúdo do state
- setName: Função que atualiza o state (gera uma nova renderização)
- useState(): dentro dos () terá o valor inicial
*/


onChange = {e => setName(e.target.value)} -> Fica observando a mudança de state

/*
e => setName(e.target.value

e: É o event
e.target.value: Acessando o contéudo digitado e armazenando esta mudança em Name e renderizando novamente
*/
```



## Opções para criar aplicações REACT
- Create React App
- VITE

Ambas vão criar o environment de desenvolvimento react. O **VITE** é mais performático e prático.

## Arquivos "desnecessários" que vem com o vite
```
- App.css
- index.css
- Assets
```

## Arquivos que serão utilizados e precisam de uma "limpeza"
```
- main.jsx
- app.jsx
```

# Na app.jsx e em componentes
```jsx
export function App(){
    return(
        <>
            <h1>Fundamentos de REACTJS</h1>
        </>
    )
}
```

**OBS:** TODO componente começa com letra Maiuscula <br>

## EXPORT e IMPORT nomeados
```
export nomeada: export function App()
import nomeado: import {App} from './arquivo'

OBS: No nomeada o nome precisa ser exatamente o mesmo do que foi exportado
```

**VANTAGEM do EXPORT nomeado:** Poder exportar mais de uma função em um mesmo arquivo.


## EXPORT e IMPORT default
```jsx
export default function App(){
    return(
        <>
            <h1>Fundamentos de REACTJS</h1>
        </>
    )
}
```

**OBS:** O import default não precisa de {} e o nome do import pode ser diferente do nome da função exportada.

ex:
```jsx
import QualquerNomeAqui from './nomedoarquivo'
```