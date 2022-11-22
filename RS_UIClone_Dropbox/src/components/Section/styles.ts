import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa'

export const Container = styled.div`
    /* Declarando variáveis */
    --padding-top: 100px;
    --padding-bottom: 120px;
    --heading-font-size: 32px;
    --content-width: 100%;

    /* modificador de variáveis para cada variant */
    &.blue{
        --bg-color: var(--color-primary);
        --text-color: var(--color-tertiary);
        --logo-color: var(--color-secondary)
    }
    &.beige{
        --bg-color: var(--color-secondary);
        --text-color: var(--color-quaternary);
        --logo-color: var(--color-primary)
    }
    &.white{
        --bg-color: var(--color-tertiary);
        --text-color: var(--color-quaternary);
        --logo-color: var(--color-blue)
    }
    &.black{
        --bg-color: var(--color-quaternary);
        --text-color: var(--color-tertiary);
        --logo-color: var(--color-blue)
    }
    // Como o primeiro elemento tem um padding diferente, é possível adicionar um modificador
    &:first-child{
        --padding-top: 130px;
        --heading-font-size: 51px;

        // Qunado for um device em que tenha uma tela menor, o tamanho do content será relativo a 50% do espaço total válido
        @media (min-width: 1024px){
        --content-width: 50%;
        --heading-font-size: 71px;
        }
    }

    background: var(--bg-color);
    position: relative; // colocando o position relative no container pq ele é o pai do elemento headerWraper
`;


export const HeaderWrapper = styled.div`
  position: absolute; // Absulute relativo ao container

  // Fazendo ele "consumir" o elemento inteiro
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  // Propriedade clip faz a troca dos header, faz o header não sair do seu "pai"
  // cima, direita, baixo, esquerda
  clip: rect(auto, auto, auto, auto);
`; 
export const Header = styled.header`
  z-index: 3; // para sobrepor tudo que está a sua frente
  background: var(--bg-color);

  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

    >h1 {
      display: flex;
      align-items: center;

      > span{
        color: var(--text-color);
        margin-left: 10px;
        font-size: 29px;
      }
    }

    >button{
      color: var(--text-color);
      background: none;
      border: none;
      outline: none;
      font-size: 16px;
      cursor: pointer;

      // Quando passar o mouse pelo button, ele vai gerar um underline no elemento
      &:hover,
      &:focus{
        text-decoration: underline;
      }
    }

    // Dessa forma o zindex vai funcionar
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;  

export const DropboxLogo = styled(FaDropbox)`
  // estilizando a logo
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
`;



export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  // dessa forma, a cor do h2 vai sempre variar e ter a mesma cor da logo
  > h2{
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }

  >p{
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }

  padding: var(--padding-top) 32px var(--padding-bottom);
`;
