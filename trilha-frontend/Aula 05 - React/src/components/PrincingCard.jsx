import React from 'react';

// Recebemos as props 'titulo', 'preco' e 'destaque' desestruturadas
export function PricingCard({ titulo, preco, destaque }) {
  return (
    <div className={`p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 w-full max-w-sm border border-gray-100
      ${destaque ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}>
      
      <h2 className="text-2xl font-bold mb-4 text-center">{titulo}</h2>
      
      <p className="text-center mb-6">
        <span className="text-4xl font-extrabold">R$ {preco}</span>
        <span className={`text-sm ${destaque ? 'text-blue-200' : 'text-gray-500'}`}>/mês</span>
      </p>

      {/* Se for destaque, inverte as cores do botão para manter o contraste */}
      <button className={`w-full font-semibold py-3 rounded-md transition-colors 
        ${destaque ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
        Assinar {titulo}
      </button>
    </div>
  );
}