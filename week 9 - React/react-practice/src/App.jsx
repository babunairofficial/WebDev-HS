import { useEffect, useState } from "react";


//conditional rendering
function App() {
  // let counterVisible = true; //the Counter component will display as long as it is true here.

  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function() {
    setInterval(function() {
      
      setCounterVisible(c => !c)
      
    }, 5000);
  }, [])

  return <div>
    <b>
      hi there
    </b>
    {counterVisible ? <Counter></Counter> : null}
  </div>
}

//React component is a function which returns some HTML.
function Counter() {
  const [count, setCount] = useState(0);

  //hooking into the lifecycle events (mounting, re-rendering, unmounting) of react
  console.log("3 - counter");

  //guard our setInterval from re-renders
  useEffect(function() {

    console.log("4 - on mount");
    let clock = setInterval(function() {

      console.log("5 - from inside setInterval");
      // setCount(count => count + 1);
      setCount(function(count) {
        return count + 1;
      });
    }, 1000);

    //clearInterval = cleanup on unmounting
    return function() {
      console.log("6 - on unmount");
      clearInterval(clock);
    }

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
