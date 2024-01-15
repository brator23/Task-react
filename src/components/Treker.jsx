import React from 'react'

const Treker = ({state, plus, minus}) => {
  return (
    <div>
      <p>{state}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default Treker
