import React from 'react'

export default function OperationButton({ operation, dispatch }) {
  return (
    <button onClick={() => dispatch({ type: 'CHOSE_OPERATION', payload: { operation } })}>{operation}</button>
  )
}
