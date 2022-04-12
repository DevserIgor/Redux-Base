import './styles.css';
import React from 'react';
import Card from '../Card';

const Soma = (props) => {
  
  return(
    <Card Title="Soma" blue>
    <div>
      <span>
        <span>Total:</span>
        <strong>10</strong>
      </span>
    </div>
  </Card>
  );
}

export default Soma;