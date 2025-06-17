import Button from "./Button";

//ProductCard = cartaz colado em cada produto com o botão “Comprar”
export default function ProductCard({ produto, onAdd }) {
  return (
    <div className="card">
      <img src={produto.image} alt={produto.title} className="imagem" /> 
      <h3>{produto.title}</h3>
      <p>Preço: R$ {produto.price}</p>
      <p>Categoria: {produto.category}</p>
      <Button label="Adicionar ao carrinho" onClick={() => onAdd(produto)} /> {/*a funcao encapsulada adicionarAoCarrinho (onAdd) agora apresenta um button em cada card, e como no product list ela tbm esta sendo chamada */}
    </div>
  );
}

{/* ==========EXPLICAÇÃO 
  
  
  ✅ 2. ProductCard é só visual + botão
Ele não sabe de onde os dados vieram.

Só recebe o produto e a função onAdd.

Quando o botão é clicado, ele apenas chama onAdd(produto).

✅ Ele não tem lógica própria, só se comunica com o que recebeu.
  
  
  */ }