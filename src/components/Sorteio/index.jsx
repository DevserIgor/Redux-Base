import './styles.css';
import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';

const Sorteio = (props) => {
  const {min, max } = props;
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
const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}
export default connect(mapStateToProps)(Sorteio);
