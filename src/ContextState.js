import { createContext, useContext, useReducer, useState } from 'react'

const initialState = {todos: []};
const store = createContext(initialState);
const { Provider } = store;


const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'ADD_TODO':
          return {...state, todos: [...state.todos, action.payload]}
      default:
        throw new Error();
    };
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

function Child() {
    const globalState = useContext(store)
    const [text, setText] = useState('')
    const todos = globalState.state.todos
    const { dispatch } = globalState;
    function handleSubmit(e) {
        e.preventDefault()
        const action = {type: 'ADD_TODO', payload: text}
        dispatch(action)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setText(e.target.value)} />
            </form>
            <ul>
                {todos.map(todo => <p>{todo}</p>)}
            </ul>
        </div>
    )
}

export default function ContextState() {
    return <StateProvider>
        <Child />
    </StateProvider>
}