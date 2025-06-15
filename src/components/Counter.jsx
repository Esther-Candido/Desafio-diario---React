import Button from "./Button";
import { useState } from 'react';

export default function Counter() {
    //variável de estado chamada "count", começando em 0
    const [count, setCount] = useState(0);

    // Função que incrementa o contador
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    }

  return (
     <div>
      <p>Contador: {count}</p>
      <Button label="Aumentar "onClick={increment}/>
      <br></br>
      <Button label="Diminuir "onClick={decrement}/>
    </div>
  );
}
