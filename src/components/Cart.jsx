import React from 'react'

export default function Cart({ itens }) {
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
