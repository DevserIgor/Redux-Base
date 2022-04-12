import './styles.css';
import React from 'react';
import Card from '../Card';

const Soma = (props) => {
  const {min, max} = props;
  return(
    <Card Title="Soma" blue>
    <div>
      <span>
        <span>Total:</span>
        <strong>{min + max}</strong>
      </span>
    </div>
  </Card>
  );
}

export default Soma;