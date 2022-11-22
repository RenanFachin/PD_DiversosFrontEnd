import React, { useState, useEffect } from 'react'

import './styles.css'

import { Card } from '../../components/Card'

export function Home() {
  // criando um estado
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: ''})

  function handleAddStudent(){
    // Criando um objeto
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    // Adicionando este objeto com o dado do novo estudante para dentro do estado
    // ... spreadOperator para recuperar o que já havia antes dentro do estado
    setStudents([
      ...students,
      newStudent
    ])
  }


  useEffect(() => {
      // Aqui estarão as ações que vão ser executadas
      // Consumindo API com o useEffect
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/renanFachin')
      const data = await response.json()

      // salvando dentro do estado de user
      setUser({
          name: data.name,
          avatar: data.avatar_url
      })
    }

    fetchData()
  },[])

 
  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
 
      <input 
        type="text" 
        placeholder="Digite o nome"
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {/* Fazendo os cartões serem criados de forma dinâmica */}
      {/* Percorrendo em cada item dentro do array de students */}

      {
        students.map((student) => (
          <Card 
            key={student.time}
            name={student.name}
            time={student.time}
          />
        ))}

    </div>
  )
}
