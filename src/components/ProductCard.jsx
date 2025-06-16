import Button from "./Button";

export default function ProductCard({ produto, onAdd }) {
  return (
    <div className="card">
      <img src={produto.image} alt={produto.title} className="imagem" /> 
      <h3>{produto.title}</h3>
      <p>Preço: R$ {produto.price}</p>
      <p>Categoria: {produto.category}</p>
      <Button label="Adicionar ao carrinho" onClick={() => onAdd(produto)} />
    </div>
  );
}

