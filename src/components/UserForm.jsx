import React, { useState } from 'react'
import Button from './Button';

export default function UserForm() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [erro, setErro] = useState('');


//funções para atualizar os estados
const pegarNome = (event) => {
    setNome(event.target.value);
}

//funções para atualizar os estados
const pegarEmail = (event) => {
    setEmail(event.target.value);
}

const handleButton = () => {
    if(nome != '' && email != ''){
        setErro(''); // limpa o erro
        alert(`Nome: ${nome}\nE-mail: ${email}`);
    }else{
        if(nome == '' && email != ''){
            setErro('[Nome] - Obrigatorio');
        }else if (email == '' && nome != ''){
            setErro('[Email] - obrigatorio');
        }else{
            setErro('Preencha os campos obrigatorios!');
        }
         
    }
}


  return (
      <div>
      <input type="text" value={nome} onChange={pegarNome} placeholder="Nome" />
      <input type="text" value={email} onChange={pegarEmail} placeholder="E-mail" />
      <Button label="Enviar" onClick={handleButton} />
      {erro && <p style={{ color: 'red' }}>{erro}</p>}   
    </div>
    );
}
