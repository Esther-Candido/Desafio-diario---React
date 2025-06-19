
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
import ProductCard from './components/ProductCard'

//App = chefe da loja
function App() {
  const [carrinho, setCarrinho] = useState(() => {const salvo = localStorage.getItem('carrinho');return salvo ? JSON.parse(salvo) : [];});
  const [produtos, setProdutos] = useState([]); //variavel produtos, com array vazio
  //const [carrinho, setCarrinho] = useState([]); //variavel carrinho, com array vazio
  const [tema, setTema] = useState('claro');
 

  //salva o carrinho como texto sempre que ele muda, no localStorage ...(f12 navegador, application -> localstorage)
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

    // Toda vez que tema mudar, atualizamos a classe do body
  useEffect(() => {
    document.body.className = tema === 'escuro' ? 'tema-escuro' : 'tema-claro';
  }, [tema]);

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


  //funcao para mudar o tema do body
  const mudarTema = () => {
    setTema((prev) => (prev === 'claro' ? 'escuro' : 'claro'));
  }
  
  // Adiciona produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    //setCarrinho([...carrinho, produto]); //adicionar o produto no array carrinho
    
    setCarrinho((prevCarrinho) => { //prevCarrinho é sempre o valor mais atual do estado. é um nome qualquer que representa o valor atual do carrinho.
    const itemExistente = prevCarrinho.find((item) => item.id === produto.id);

    if (itemExistente) {
      // Atualiza a quantidade se já estiver no carrinho
      return prevCarrinho.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
    } else {
      // Adiciona novo item com quantidade 1
      return [...prevCarrinho, { ...produto, quantidade: 1 }];
    }
  });
  };

const incrementarQuantidade = (id) => {
  setCarrinho(prev => prev.map(item =>
    item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
  ));
};




const decrementarQuantidade = (id) => {
  setCarrinho(prev => prev.map(item => //map → atualiza a quantidade | filter → remove os que ficaram com quantidade <= 0
      item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
    )
    .filter(item => item.quantidade > 0) //remove se chegar em 0. pq o filter so mantem item que é maior que 0. ele apenas descarta (remove da lista final) os que não satisfazem a condição
  );
};



  //remover do carrinho
  const removerProdCarrrinho = (id) => {
      setCarrinho(carrinho.filter((item) => item.id !== id)); //deixa no array os itens com ID diferente do que queremos remover  -- setcarrinho -> Atualiza o estado com o novo array, ou seja, remove de fato o item visualmente e logicamente
  };

  //contador de produtos carrinho
  const counterCarrinho = carrinho.length; 




/*  <h1>Meu App 🛒 ({counterCarrinho})</h1>*/
  return (
       <div>
        <Button label={`Mudar para ${tema === 'claro' ? 'escuro' : 'claro'}`} onClick={mudarTema} />
        {/* <Button label={"Mudar para " + (tema === 'claro' ? 'escuro' : 'claro')} onClick={mudarTema} /> */}
        <h1>Minha Loja</h1>
         <h4>Meu App 🛒 - direto do App.jsx ({counterCarrinho})</h4> {/*Mostrar no APP.JSX é útil quando você quer mostrar o número globalmente*/}
        <Cart itens={carrinho} onRemove={removerProdCarrrinho} onIncrementar={incrementarQuantidade} onDecrementar={decrementarQuantidade}/>
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
  
  
  
  
  
  
  */
 
/* =========explicacao da logica do carrinho e produtos ======
O chefe (App) diz para a estante (ProductList):
"Para cada produto da loja, cole um cartaz (ProductCard) com o botão que, quando clicado, adiciona aquele produto ao carrinho (onAdd)".

Já no Cart, o carrinho já tem os produtos, então o botão “Remover” pode chamar a função direto.
*/

}