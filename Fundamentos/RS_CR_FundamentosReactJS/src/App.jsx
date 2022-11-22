// Import de componentes
import { Title } from './components/Title'

// Importando o useState para utilizar states no react
import { useState } from "react"

export function App(){
  
  const [name, setName] = useState('');

  return(
    <div>
      <Title title="Fundamentos do ReactJS" number={1}/>
      <Title title="O que é preciso saber para começar" number={2}/>
      <Title title="2022" number={3}/>


      {/* Toda vez que o input mudar, será atualizado o seu state */}
      <input type="text" onChange={e => setName(e.target.value)}/>
      
      {/* Exibindo o conteúdo de name */}
      <h2>
        {name}
      </h2>

    </div>
  );
}