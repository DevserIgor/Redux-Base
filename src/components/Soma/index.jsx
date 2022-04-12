import './styles.css';
import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';

const Soma = (props) => {
  const {min, max } = props;
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

const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}
export default connect(mapStateToProps)(Soma);