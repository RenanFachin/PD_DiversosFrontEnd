import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

// importando section
import Section from './components/Section'

// Importando o sidemenu
import SideMenu from './components/SideMenu'

import MenuForm from './components/MenuForm'

// importando os textos padrões
import data from './data'

function App() {
  return (
    <>
      <Section
        variant='blue'
        title={data[0].title} // buscando dentro do arquivo data o primeiro item
        description={data[0].description}
      />
      <Section
        variant='beige'
        title={data[1].title} // buscando dentro do arquivo data o primeiro item
        description={data[1].description}
      />
      <Section
        variant='blue'
        title={data[2].title} // buscando dentro do arquivo data o primeiro item
        description={data[2].description}
      />
      <Section
        variant='white'
        title={data[3].title} // buscando dentro do arquivo data o primeiro item
        description={data[3].description}
      />
      <Section
        variant='black'
        title={data[4].title} // buscando dentro do arquivo data o primeiro item
        description={data[4].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
    </>
  );
}

export default App;
