import { useState } from 'react'
import  img  from './bana.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [nome, setNome] = useState()
  const [nome2, setNome2] = useState()
  const [resposta, setResposta] = useState('')

  const handleChange = (e) => {
    setNome(e.target.value)
  }

  const handleChange2 = (e) => {
    setNome2(e.target.value)
  }
  const cara = () => {
    
    const n1 = parseFloat(nome)
    const n2 = parseFloat(nome2)
    const sada = n1 / (n2 * n2)

    if (sada < 18.5) return [ <br />, `Abaixo do peso` ]
    if (sada >= 18.5 && sada <= 24.9) return [ <br />, `Peso normal` ]
    if (sada >= 25.0 && sada <= 29.9) return [ <br />, `Excesso de peso` ]
    if (sada >= 30.0 && sada <= 34.9) return [ <br />, `Obesidade classe 1` ]
    if (sada >= 35.0 && sada <= 39.9) return [ <br />, `Obesidade classe 2` ]
    if (sada >= 40.0) return [ <br />, `Obesidade classe 3` ]



    return  [
      resposta
    ]
  }

  return (
    <>
    <h1>IMC</h1>
     <input 
        type="text" 
        value={nome} 
        onChange={handleChange} 
        placeholder="Digite seu peso"
      />
      <br />
      <input 
        type="text" 
        value={nome2} 
        onChange={handleChange2} 
        placeholder="Digite sua altura"
      />
      {cara()}
    </>
  )
}

export default App
