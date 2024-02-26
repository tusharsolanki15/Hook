import React, { useMemo, useState } from 'react'

const Counter = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCunterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () =>{
        setCunterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() =>{
        let i = 0;
        while(i<200000000)  i++;
        return counterOne % 2 === 0
    },[counterOne])

  return (
    <div>
        <button onClick={incrementOne}>Count One - {counterOne} </button>
        <span>{isEven ? "Even" : "odd"}</span>
        <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    </div>
  )
}

export default Counter