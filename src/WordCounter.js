import { useState, useEffect } from 'react'

// useEffect is a way to observe changes to state
// it also functions as a device to hook onto life cycle methods
// these were traditional methods in React Classes
// componentDidMount, componentDidUpdate...
// https://reactjs.org/docs/hooks-effect.html

export default function WordCounter() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    useEffect(() => {
        const count = text ? text.trim('').split(' ').length : 0
        setWordCount(count)
    }, [text])
    return <div>
        <p>there are {wordCount} words</p>
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
    </div>
}