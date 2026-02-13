import React from 'react';
import Card from './Card'; // Assumindo que o Card já usa Tailwind ou classes básicas

const CardGrid = () => {
  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Nossa Galeria de Cards
      </h1>

      {/* grid: Ativa o layout de grade
          grid-cols-1: 1 coluna no mobile (padrão)
          md:grid-cols-2: 2 colunas em tablets (medium screens)
          lg:grid-cols-3: 3 colunas em desktops (large screens)
          gap-6: Espaçamento de 24px entre os cards
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Projeto A" description="Descrição curta do projeto." />
        <Card title="Projeto B" description="Descrição curta do projeto." />
        <Card title="Projeto C" description="Descrição curta do projeto." />
        <Card title="Projeto D" description="Descrição curta do projeto." />
      </div>
    </section>
  );
};

export default CardGrid;
