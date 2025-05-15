import { useEffect, useState } from "react"


function App() {
  const [post, setPost] = useState({});

  //define the function
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();
    setPost(json);
  }
  useEffect(() => {
    getPosts(); //called a function, which is defined above
  }, [])

  return (
    <div>
      {post.title}
    </div>
  )
}


export default App
