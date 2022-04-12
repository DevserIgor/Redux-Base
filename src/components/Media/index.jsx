import './styles.css';
import React from 'react';
import Card from '../Card';

const Media = (props) => {
  
  return(
    <Card Title="Média" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
}

export default Media;