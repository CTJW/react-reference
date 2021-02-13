import { useState } from 'react'
// components can conditional display content based on a condition
// https://reactjs.org/docs/conditional-rendering.html
export default function ConditionalComponent(props) {
    // any js value can be used inside of curly braces
    const [count, setCount] = useState(0)
    return <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        {/* if remainer of a number divided by two is 0 it is even */}
        {count % 2 === 0 ? <p>{count} is even...</p> : <p>{count} is odd...</p>}
    </div>
}