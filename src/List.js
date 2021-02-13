import { useState } from 'react'
import listOfJSON from './list.json'
export default function List() {
    // set the list state to be the array of json
    const [list, setList] = useState(listOfJSON)
    return <div>
        <ul>
            {list.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    </div>
}