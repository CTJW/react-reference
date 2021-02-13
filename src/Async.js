import { useState, useEffect } from "react";

export default function Async() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data);
        setList(data);
      });
  }, []);
  return (
    <div>
    <h2>async component</h2>
      {list.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
}
