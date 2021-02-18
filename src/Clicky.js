import { useState } from 'react'
// This button component has it's own state
// https://reactjs.org/docs/hooks-state.html
export default function Clicky() {
    // useState takes an initial state (here it is 0)
    // the function returns an array with two things.
    // [initialStateVariable, functionToChangeVariable]
    
    // in this case count is the initialStateVariable
    // setCount is the function that when called - changes count
    // when the state changes - react will:
    // update the element in the DOM that uses that piece of state
    // in our case - the button
    // const myStatefullThingy = useState(0)
    // const count = myStatefullThingy[0]
    // const setCount = myStatefullThingy[1]
    const [count, setCount] = useState(0)
    function handleCount() {
        ////////
        setCount(count + 1)
    }
    function whyAreWeDoingThis(v) {
        alert('this is dumb: ' + v)
    }
    function myConfusingFunction(v) {
        whyAreWeDoingThis(v)
    }
    const handleCount2 = () => setCount(count + 1)
    const handleCount3 = (v) => setCount(v)
    const btn = <button onClick={handleCount}>{count}</button>
    const btn2  = <button onClick={handleCount2}>{count}</button>
    const btn3  = <button onClick={() => handleCount3(count + 1)}>{count}</button>
    const btn4 = <button onClick={() => myConfusingFunction(1)}>{count}</button>
    return btn4
}