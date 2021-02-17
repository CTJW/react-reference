import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import React from 'react'
import HelloWorld from './HelloWorld';
import Greet from './Greet';
import WordCounter from './WordCounter';
import Async from './Async';
import Async2 from './Async2';
import ConditionalComponent from './ConditionalComponent';
import ContextExample from './ContextExample';
import ContextState from './ContextState';
// import Hangman from './Hangman';

// https://reactjs.org/docs/introducing-jsx.html
function App() {
  return (
    <div>
      {/* <hr />
    
      <p className="foo">I am some text</p>
      <HelloWorld myCoolArray={[1,2,3]}></HelloWorld>
      <div></div>
      <hr />
      <hr />
      <Greet name="Jane" />
      <hr />
      <WordCounter />
      <WordCounter />
      <WordCounter />
      <hr />
      <Router>
      <Link to="/">go to route home</Link>
        <Link to="/foo/1">go to route foo/1</Link>
        <p>You can also change the url manually to foo/2 and see it change...</p>
        <div style={{background: '#ddd', padding: '20px'}}>
          <Route path="/foo/:id" component={Async2}></Route>
        </div>
      </Router>

      <ConditionalComponent />

      <Async /> */}
      <ContextExample></ContextExample>
      <ContextState></ContextState>
    </div>
  );
}

export default App;
