// the greet component receives the prop object with name
// https://reactjs.org/docs/components-and-props.html
export default function Greet(props) {
    console.log(props) // {name: 'Jane'}
    // any js value can be used inside of curly braces
    return <h2>Hello {props.name}!</h2>
}