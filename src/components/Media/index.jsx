import './styles.css';
import React from 'react';
import Card from '../Card';

const Media = (props) => {
  const {min, max} = props;
  return(
    <Card Title="Média" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}

export default Media;