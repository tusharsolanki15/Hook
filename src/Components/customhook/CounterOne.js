import React from 'react'
import useCounter from './useCounter'

const CounterOne = () => {

    const [count, increment, decrement, reset] = useCounter(0, 1)
    
    return (
        <div>
            <h1>count - {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrememt</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne