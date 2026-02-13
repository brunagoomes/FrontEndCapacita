import React from 'react';

// URL de exemplo para a foto, ps não consegui o link da foto online
const FOTO_PERFIL_URL = 'foto.bruna';

function Profile() {
  // 1. Usar variáveis para armazenar os dados do perfil
  const nomeCompleto = 'Bruna Gomes';
  const profissao = 'Estudante';
  const cidade = 'Ibirité';

  // 3. Estilos inline para o container e a foto
  const estiloContainer = {
    // Requisito 3: Centralizar o conteúdo
    textAlign: 'center',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '300px',
    // Requisito 4: Adicionar uma borda
    border: '2px solid #333',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const estiloFoto = {
    borderRadius: '50%', // Deixa a foto redonda
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '15px'
  };

  return (
    <div style={estiloContainer}>
      <img 
        src={FOTO_PERFIL_URL} 
        alt={`Foto de perfil de ${nomeCompleto}`}
        style={estiloFoto}
      />
      
      {/* 2. Usar chaves {} para exibir os valores das variáveis */}
      <h2>{nomeCompleto}</h2>
      <p>
        <strong>Profissão:</strong> {profissao}
      </p>
      <p>
        <strong>Cidade:</strong> {cidade}
      </p>
    </div>
  );
}

export default Profile;

// Exemplo de como usar (em outro arquivo, como App.js):
/*
import Profile from './Profile';
function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}
export default App;
*/