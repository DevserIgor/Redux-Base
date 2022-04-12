import './styles.css';
import React from 'react';
import Card from '../Card';

const Intervalo = (props) => {
  
  return(
    <Card Title="Intervalo de Números" red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input 
            type="number" 
            value={1} 
            readOnly
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input 
            type="number" 
            value={10} 
            readOnly
          />
        </span>
      </div>
    </Card>
  );
}

export default Intervalo;