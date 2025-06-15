import { useState } from 'react';

export default function InputText() {

//variavel text com o status vazio
const [text, setText] = useState('');

//
const handleChange = (event) => {
    setText(event.target.value);  //event.target → é o input onde o evento aconteceu  .. event.target.value → é o valor atual dentro desse input (o texto digitado)
};

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} placeholder="Digite algo..." />
      <p>Você digitou: {text}</p>
    </div>
  );
}
