
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import Counter from './components/Counter'
import InputText from './components/InputText'
import UserForm from './components/UserForm'
import MultiStepForm from './components/MultiStepForm'
import ProductList from './components/ProductList'
import { useState, useEffect } from 'react';
import Cart from './components/Cart';

function App() {
  const [produtos, setProdutos] = useState([]); //variavel produtos, com array vazio
  const [carrinho, setCarrinho] = useState([]); //variavel carrinho, com array vazio


  //Roda apenas uma vez ao carregar (pode ser usado -> Buscar dados de uma API, Adicionar um evento (ex: scroll, resize), Trabalhar com setTimeout ou setInterval, Atualizar o título da aba com document.title, Sincronizar dados com localStorage
  useEffect(() => {
      // Vamos buscar os dados da API assim que o componente carregar
      fetch('https://fakestoreapi.com/products') //Busca dados da API - requisição HTTP GET
        .then((res) => res.json()) //Quando a resposta chega, ela vem no formato de um "objeto Response", que precisa ser convertido para JSON (JavaScript Object Notation).
        .then((dados) => {  //Depois que vira JSON, você chama de dados ou qualquer outro nome.
          setProdutos(dados); // guarda os dados no estado
        })
        .catch((erro) => {
          console.error('Erro ao buscar os produtos:', erro);
        });
    }, []); // [] faz com que o useEffect rode apenas 1 vez (ao carregar)

  // Adiciona produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
       <div>
        <h1>Minha Loja</h1>
        <Cart itens={carrinho} />
         <ProductList produtos={produtos} onAdd={adicionarAoCarrinho} />
      </div>
    
  )
}

export default App


{/*  ========== functio app - Testes 1 ======== 
  
function App() {
  
//funcao para mostrar um alert
const handleClick = () => {
  alert('Você clicou no botão!');
}

const soma = () =>{
  alert("1 + 2 =" + (1 + 2));
}

const vezes = () =>{
  alert("1 * 2 =" + (1 * 2));
}

  return (
    <>
      <div>
       <Header />
       <Button label="clique aqui" onClick={handleClick}/>
       <Button label="Somar" onClick={soma}/>
       <Button label="Vezes" onClick={vezes}/>
      <br></br>
       <Counter />
       <br></br>
       <InputText />
       <br></br>
       <br></br>
       <UserForm />
        <br></br>
      <div>
        <h1>Cadastro Multi-Etapas</h1>
        <MultiStepForm />
      </div>
      </div>
      <br></br>
       <div>
        <h1>Minha Loja</h1>
        <ProductList />
      </div>
      
    </>
  )
}
  
  
  
  
  
  
  */}