import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1)
  }
  return (

    <div>
      <button onClick={increaseCount}>Increase</button>
      <br />
      {count}
    </div>
    
  )
}

export default App
