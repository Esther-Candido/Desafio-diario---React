import ProductCard from './ProductCard';
import './style.css';


//ProductList = estante com vários produtos
export default function ProductList({ produtos, onAdd }) {

return (

    <div className="container">
    <h1>Produtos</h1>
    {produtos.length === 0 ? (
      <p>Carregando produtos...</p>
    ) : (
      <div className="grid">
        {produtos.map((p) => (
          <ProductCard key={p.id} produto={p} onAdd={onAdd}/>//enviar a funcao encapsulada adicionarAoCarrinho no onAdd para o ProductCard.. PQ NO PRODUCTLIST, estamos mapeando cada produto com o map.. com isso em cada produto da lista a chamada da funcao
        ))}
      </div>
    )}
  </div>

);


}//fim ProductList

{/* ====== CÓDIGO ANTIGO UTEIS ======


===antes productlist trazendo o estado dos produtos e exibindo nos cards

export default function ProductList() {
const [produtos, setProdutos] = useState([]);  //variavel produtos, com um array vazio


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


return (
    <div className="container">
    <h1>Produtos</h1>
    {produtos.length === 0 ? (
      <p>Carregando produtos...</p>
    ) : (
      <div className="grid">
        {produtos.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    )}
  </div>
);

//outra coisa abaixo

---> jeito de trazer direto, sem o card (ProductCard)
<ul>
    {produtos.map((produto) => (  //Serve para mostrar uma lista de forma dinâmica
    <li key={produto.id}>
        {produto.title} - R${produto.price} - Categoria:{produto.category}
    </li>
    ))}
</ul> 

*/


/* =======EXPLICACAO 

✅ 1. ProductList está fazendo o mapeamento
Ele tem o array completo de produtos.

Com o .map(), ele constrói cada ProductCard.

E aqui é o lugar certo para passar:

o produto específico (produto={p})

a função que sabe o que fazer ao clicar no botão (onAdd={onAdd}).

✅ Como ele cria cada ProductCard, ele pode “injetar” o que for necessário.




*/



}
