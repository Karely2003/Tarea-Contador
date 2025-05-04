import { useEffect, useState } from 'react'

import './App.css'
import ContadorPalabras from './components/contadorPalabras';

function App() {
  const [contador, setContador] = useState(0);


 /* const [contador2, setContador2] = useState<Number>(0);

  const [contador3, setContador3] = useState<List<Number>>([]);*/

  function sumaContador () {

   setContador(contador+1)
  }


  function restaContador (numeroRestar: number){

    setContador(contador-numeroRestar)
  }

//se utiliza pra determinar cunado el componente esta cargado
useEffect(()=>{
     console.log('componente cargado')
     setContador(10)
     
}, [])




  return (
    <>
     valor del contador : {contador} <br></br>
     <button onClick={sumaContador}>suma 1 unidad</button>
     <br></br>
     
     <button onClick={()=>restaContador(2)}>restar contador</button>

     <h1>Contador de Letras</h1>

     <ContadorPalabras></ContadorPalabras>

    </>
  )
}

export default App
