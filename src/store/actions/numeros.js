export function alterarMin(newNumber) {
  return {
    type: 'NUM_MIN_ALTERADO',
    payload: newNumber
  }
}

export function alterarMax(newNumber) {
  return {
    type: 'NUM_MAX_ALTERADO',
    payload: newNumber
  }
}