import './styles.css';
import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { alterarMax, alterarMin } from '../../store/actions/numeros';



const Intervalo = (props) => {
  const {min, max } = props;
  return(
    <Card Title="Intervalo de Números" red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input 
            type="number" 
            value={min} 
            onChange={e => props.alterarMinimo(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input 
            type="number" 
            value={max} 
            onChange={e => props.alterarMaximo(+e.target.value)}
          />
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

const mapDispatchToProps = dispatch => {
  return {
    alterarMinimo(newNumber) {
      const action = alterarMin(newNumber);
      dispatch(action);
    },
    alterarMaximo(newNumber) {
      const action = alterarMax(newNumber);
      dispatch(action);
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intervalo);

