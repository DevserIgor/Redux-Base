import './styles.css';
import React from 'react';
import Card from '../Card';

const Sorteio = (props) => {
  const {min, max} = props;
  const random = parseInt(Math.random() * (max - min) + min);
  return(
    <Card Title="Sorteio" purple>
      <div>
        <span>
          <span>Número:</span>
          <strong>{random}</strong>
        </span>
      </div>
    </Card>
  );
}

export default Sorteio;