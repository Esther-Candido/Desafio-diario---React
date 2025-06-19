import React from 'react'
import Button from './Button';

//Cart = carrinho de compras
export default function Cart({ itens, onRemove, onIncrementar, onDecrementar}) {
  return (
    <div>
      <h2>Carrinho</h2>
      <h4>Meu App 🛒 - direto do Cart ({itens.length})</h4> {/*Mostrar no carrinho é util quando o contador está relacionado apenas ao carrinho.*/ }
      
      {itens.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {itens.map((item, index) => (
            <li key={index}>
              {item.title} - R${item.price} - Qtd:{item.quantidade}
            
              <button onClick={() =>  onRemove(item.id)}>Remover</button>
              <Button label=" + " onClick={() => onIncrementar(item.id)} />
              <Button label=" - " onClick={() => onDecrementar(item.id)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


{/* 
  ============EXPLICACAO

  ✅ 3. Cart faz .map() com os itens do carrinho
Então ele também tem os dados de cada item.

E você pode passar para cada item um botão com onClick={() => removerDoCarrinho(item.id)}.

✅ O botão sabe exatamente quem remover.
  
  
  
  */}