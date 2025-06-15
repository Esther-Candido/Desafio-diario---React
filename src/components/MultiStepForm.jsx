import React, { useState } from 'react'
import Button from './Button';

export default function MultiStepForm() {
  const [step, setStep] = useState(1); // controla em qual etapa estamos, inicia pela 1
  const [nome, setNome] = useState(''); //variavel nome, com o estado inicial vazio
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [erro, setErro] = useState('');

    //funcao para trocar a pagina 
    const handleNext = () => {
        if (step === 1 && nome === '') {
        setErro('Nome é obrigatório');
        return;
        }
        if (step === 2 && email === '') {
        setErro('E-mail é obrigatório');
        return;
        }
        setErro('');
        setStep(step + 1); //caso tiver tudo preenchido, entao pega minha step e incrementa +1 (ou seja, muda de etapa)
    };

   //funcao para retortar a pagina
   const handlePrev = () => {
    setStep(step - 1);
    setErro('');
  };

    //funcao para validar os inputs total das steps
    const handleSubmit = () => {
    if (idade === '') {
      setErro('Idade é obrigatória');
      return;
    }
    setErro('');
    alert(`Nome: ${nome}\nEmail: ${email}\nIdade: ${idade}`); //caso tudo ok, entao mostrar no tela no alert os dados inscrito
  };



  return (
    <div>
      {step === 1 && (
        <label>
        Nome: <br />
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        </label>
      )}
      {step === 2 && (
        <label>
         Email:  <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         </label>
      )}
      {step === 3 && (
        <label>
         Idade:  <br />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        </label>
      )}

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <div style={{ marginTop: '10px' }}>
        {step > 1 && <Button label="Voltar" onClick={handlePrev} />}
        {step < 3 && <Button label="Próximo" onClick={handleNext} />}
        {step === 3 && <Button label="Enviar" onClick={handleSubmit} />}
      </div>
    </div>
  );
}
