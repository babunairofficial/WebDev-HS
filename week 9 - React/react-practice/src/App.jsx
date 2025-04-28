import { useEffect, useState } from "react";


function App() {
  return <div>
    <b>
      hi there
    </b>
    <Counter></Counter>
  </div>
}

//React component is a function which returns some HTML.
function Counter() {
  const [count, setCount] = useState(0);

  //hooking into the lifecycle events (mounting, re-rendering, unmounting) of react
  // console.log("counter");

  //guard our setInterval from re-renders
  useEffect(function() {
    setInterval(function() {

      // setCount(count => count + 1);
      setCount(function(count) {
        return count + 1;
      })
    }, 1000)
    console.log("mounted");
  }, []);
  

  function increaseCount() {
    setCount(count + 1 );
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }
  
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button>
  </div>
}
export default App
