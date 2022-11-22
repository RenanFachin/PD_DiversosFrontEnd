import React, { useState, useEffect } from 'react';

import { Container } from './styles';

// Criando limites para que a página abra o menu lateral em scrollY
const scrollThreshold = 300;

declare global{
  interface Window{
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  // Criando um estado
  const [scrollY,setScrollY] = useState(0); // Começando em 0
  const [isActive, setIsActive] = useState(false); // Começa como false (fechado)

  useEffect(() => {
    function onScroll(){
      // Toda vez que tiver um scroll na tela, acontecerá algo
      setScrollY(window.scrollY); // Atualizando os dados do estado
      setIsActive(false); // Para não fechar o menu 
    }

    window.addEventListener('scroll',onScroll);

    return() => window.removeEventListener('scroll', onScroll)
  },[])

  const classes = [
    // Se o menu estiver ativo por conta de um clique para abrir o menu (adicionar uma classe open no elemento)
    isActive ? 'open' : '',

    // Caso o menu estiver ativo por conta do scroll, abrir o menu porém com outras caracteristicas
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];

  // com o join, ficará ('open scroolOpen')
  const className = classes.join(' ').trim();

  function toggleActiveMenu(){
    // Se for true vira false
    // Se for false vira true
    setIsActive(prev => !prev);
  }

  window.toggleActiveMenu = toggleActiveMenu

  return (
    <Container className={className}>
      {children}
    </Container>
  );
};

export default SideMenu;