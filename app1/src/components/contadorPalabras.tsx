import React, { useEffect, useState } from "react";

export default function ContadorPalabras() {
  const [text, setTexto] = useState< string| null>(null);
  const [contadorLetras, setContadorLetras] = useState(0);
  const [colorletra, setColorletra] = useState("white");

  useEffect(() => {
    const contador = text?.length;
    setContadorLetras(contador);
    letrasIngresadas(contador);
  }, [text]);

  function manejarTexto(e: any) {
    setTexto(e.target.value);
  }

  function letrasIngresadas(contador) {
    if (contador < 10) {
      setColorletra("yellow");
    } else if (contador >= 10 && contador < 50) {
      setColorletra("green");
    } else if (contador >= 50) {
      setColorletra("red");
    }
  }

  return (
    <div>

        <textarea name="" id=""  rows={15} cols={30} onChange={manejarTexto} 
        style={{ color: colorletra }}></textarea>
      
      <h2>La cantidad de letras es: {contadorLetras}</h2>
    </div>
  );
}


