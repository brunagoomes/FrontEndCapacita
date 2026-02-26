import styled from 'styled-components';

// O Container recebe a prop 'variant' para decidir as cores
export const CardContainer = styled.div`
  background-color: ${props => props.variant === 'dark' ? '#333' : '#fff'};
  color: ${props => props.variant === 'dark' ? '#f0f0f0' : '#333'};
  border: 1px solid ${props => props.variant === 'dark' ? '#444' : '#ddd'};
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h2`
  font-family: sans-serif;
  margin-bottom: 8px;
  color: ${props => props.variant === 'dark' ? '#61dafb' : '#007bff'};
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;
