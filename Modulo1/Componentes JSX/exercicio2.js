import React, { Fragment } from 'react';

// 1. Objeto para armazenar todos os dados da receita
const recipeData = {
  titulo: 'Pão de Queijo Cremoso',
  tempoPreparoMinutos: 95, // Exemplo de tempo maior que 60 minutos
  dificuldade: 'Médio',
  ingredientes: [
    '500g de polvilho doce',
    '1 copo de leite',
    '1/2 copo de óleo',
    '1 ovo grande',
    '250g de queijo minas curado ralado',
    'Sal a gosto'
  ],
  modoPreparo: 'Misture o polvilho com os ingredientes líquidos, escalde, e depois adicione o ovo e o queijo ralado. Misture bem até formar uma massa homogênea. Enrole as bolinhas e leve ao forno pré-aquecido a 180°C por cerca de 30 minutos ou até dourarem.'
};

function RecipeCard() {
  const { titulo, tempoPreparoMinutos, dificuldade, ingredientes, modoPreparo } = recipeData;

  // 2. Lógica para calcular e exibir o tempo
  let tempoExibicao;
  if (tempoPreparoMinutos > 60) {
    const tempoHoras = (tempoPreparoMinutos / 60).toFixed(1);
    tempoExibicao = `${tempoHoras} horas (${tempoPreparoMinutos} min)`;
  } else {
    tempoExibicao = `${tempoPreparoMinutos} minutos`;
  }

  // 3. Lógica para definir a cor com base na dificuldade
  let corDificuldade;
  switch (dificuldade.toLowerCase()) {
    case 'fácil':
      corDificuldade = 'green';
      break;
    case 'médio':
      corDificuldade = 'orange';
      break;
    case 'difícil':
      corDificuldade = 'red';
      break;
    default:
      corDificuldade = 'gray';
  }

  // Estilos inline para o card principal e o indicador de dificuldade
  const cardStyle = {
    padding: '25px',
    maxWidth: '500px',
    margin: '30px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  
  const dificuldadeStyle = {
    color: 'white',
    backgroundColor: corDificuldade,
    padding: '4px 10px',
    borderRadius: '4px',
    display: 'inline-block',
    fontWeight: 'bold'
  };

  // 4. Uso do Fragment (<Fragment> ou <></>) como elemento raiz
  return (
    <Fragment>
      <div style={cardStyle}>
        <h2>{titulo}</h2>
        <p>
          <strong>Tempo de Preparo:</strong> {tempoExibicao}
        </p>
        <p>
          <strong>Dificuldade:</strong> 
          <span style={dificuldadeStyle}>
            {dificuldade}
          </span>
        </p>

        <hr />

        <h3>Ingredientes</h3>
        {/* 5. Organização dos ingredientes em lista não ordenada */}
        <ul>
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>

        <hr />

        <h3>Modo de Preparo</h3>
        <p>{modoPreparo}</p>
      </div>
    </Fragment>
  );
}

export default RecipeCard;
