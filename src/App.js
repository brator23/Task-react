import React, { useState } from 'react'
import Boxes from './components/Boxes'
import Treker from './components/Treker'

const App = () => {
  let styleArr = [
    {width: "300px", height: "150px", backgroungColor: "red"}
  ]

  let [state, setNum] = useState(0);
  let plus = () => {
    setNum(state + 1)
  }
  let minus = () => {
    setNum(state - 1)
  }
  return (
    <div>
      <Boxes styleArr={styleArr} />
      <Treker state={state} plus={plus} minus={minus}  />
    </div>
  )
}

export default App


