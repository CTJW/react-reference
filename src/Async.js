import { useState, useEffect } from "react";

// Promise represent a future value.... ???? ;/

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({hello: 'world'})
  }, 3000)
})

prom.then(v => console.log(v))

export default function Async() {
  const [album, setList] = useState({
    "id": 1,
    "name": "Album 1",
    "thumbnail": "https://www.placecage.com/c/200/300",
    "photos": [
        {
            "name": "photo 1",
            "thumbnail": "https://www.placecage.com/c/200/300"
        },
        {
            "name": "photo 2",
            "thumbnail": "https://www.placecage.com/c/200/300"
        }
    ]
});

  // useEffect(() => {
  //   fetch("http://localhost:3001/albums/1")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log("data", data);
  //       setList(data);
  //     })
  // }, []);
  return (
    <div>
    <h2>async component</h2>
      {/* Cannot read property 'map' of undefined */}

      {album.photos.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}
