import { useState, useEffect } from "react";

export default function Async(props) {
  const [item, setItem] = useState({});
  // react router provides the props here
  const id = props.match.params.id;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data);
        setItem(data);
      });
  }, []);
  return (
    <div>
    <h2>async component</h2>
      <p>id: {item.id}</p>
      <br />
      <p>title: {item.title}</p>
    </div>
  );
}
