import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext('light')

function ChildOfChildOfChild() {
    const theme = useContext(ThemeContext)
    const bgColor = theme == 'light' ? 'black' : '#ddd'
    const textColor = theme == 'light' ? 'white' : 'black'
    return <button style={{backgroundColor: bgColor, color: textColor}}>{theme}</button>
}

function ChildOfChild() {
    return <ChildOfChildOfChild />
}

function Child() {
    return <ChildOfChild />
}

export default function ContextExample() {
    const [theme, setTheme] = useState('light')
    return <ThemeContext.Provider value={theme}>
        <button onClick={() => setTheme('dark')}>toggle the theme: {theme}</button>
        <Child />
    </ThemeContext.Provider>
}