import React, { useState } from 'react';
import { CardContainer, Title, Description } from './CardStyles';

const Card = () => {
  // Estado para controlar o tema (Desafio Extra)
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <CardContainer variant={theme} onClick={toggleTheme}>
      <Title variant={theme}>Styled Card</Title>
      <Description>
        Clique em mim para alternar entre Light e Dark mode!
      </Description>
    </CardContainer>
  );
};

export default Card;
