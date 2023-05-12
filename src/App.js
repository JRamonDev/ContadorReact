import React from 'react'
import { useState } from 'react';
window.document.title= 'Contador';

//Crea un contador que pueda ser incrementado y decrementado por un botón.

export default function Contador(){
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <button onClick={incrementarContador}>+</button>
      <h1>{contador}</h1>
      <button onClick={decrementarContador}>-</button>
    </div>
  );
}

