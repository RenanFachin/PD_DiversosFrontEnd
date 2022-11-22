import React from 'react';
import { Container, HeaderWrapper, Header, DropboxLogo, Content } from './styles';

interface Props{
    // algumas variants
    variant: 'blue' | 'beige' | 'white' | 'black';
    title: string;
    description: string;
}

const section: React.FC<Props> = ({variant, title, description}) => {
  // Lógica para fazet a troca do que está escrito no botão
  // Vai gerar, de modo aleatório um número entr 0 e 1. E vai fazer o arredondamento (TOTALMENTE RANDOMICO)
  const buttonVariant = Math.round(Math.random()); // Vai retornar 0 ou

  function handleToggle(){
    if(window.toggleActiveMenu) window.toggleActiveMenu();
    // se ele não for undefined, ele vai executar a função
}

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          {/*  Caso seja 0 = acessar. Caso seja diferente de 0 = interagir*/}
          <button onClick={handleToggle}>
            {buttonVariant === 0 ? 'Acessar' : 'Interagir'}
          </button>
        </Header>
      </HeaderWrapper>
        <Content>
            <h2>{title}</h2>
            <p>{description}</p>
        </Content>
    </Container>
  )
}

export default section;