import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(9);


  function increase() {
    setCount(c => c + 1);
  }

  function decrease() {
    setCount2(d => d - 1);
  }
  return <div>
    <Counter count={count} count2={count2}></Counter>
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
    After counter
  </div>
  
}

function Counter(props) {

  useEffect(function() { //runs only one time as there is no state variable change (an empty array)
    console.log("mount");

    return function() {
      console.log("unmount");
    }
  }, []); //empty array (dependency array is empty)

  useEffect(function() { //runs only when there is change in props.count
    console.log("count has changed");

    return function() {
      console.log("cleanup inside second effect")
    }
  }, [props.count]) //dependency array has props.count
  return <div>
    Counter {props.count}!
    Counter2 {props.count2}
  </div>
}
export default App
