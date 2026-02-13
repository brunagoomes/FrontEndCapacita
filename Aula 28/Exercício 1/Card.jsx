import React from 'react';
import styles from './Card.module.css'; // Importando como objeto

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
