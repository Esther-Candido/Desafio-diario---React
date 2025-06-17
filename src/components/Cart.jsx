import React from 'react'

//Cart = carrinho de compras
export default function Cart({ itens, onRemove }) {
  return (
    <div>
      <h2>Carrinho</h2>
      {itens.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {itens.map((item, index) => (
            <li key={index}>
              {item.title} - R${item.price}
              <button onClick={() =>  onRemove(item.id)}>Remover</button>
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