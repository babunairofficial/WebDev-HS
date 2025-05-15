import { useState } from "react";
import { useFetch } from "./hooks/useFetch"


function App() {
  const [currentPost, setCurentPost] = useState(1);
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)

  return (
    <div>
      <button onClick={() => setCurentPost(1)}>1</button>
      <button onClick={() => setCurentPost(2)}>2</button>
      <button onClick={() => setCurentPost(3)}>3</button>
      <div>{JSON.stringify(finalData)}</div>
    </div>
  )
}


export default App
