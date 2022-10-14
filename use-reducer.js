import React, { useReducer } from 'react'

//counter starts w/ 0
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
//action is instruction to the reducer function
function CounterOne() {
    const [ count, dispatch ] = useReducer(reducer, initialState) //1st function
    return (
        <div>
            <p>Count- {count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

        </div>
    )
}

export default CounterOne
