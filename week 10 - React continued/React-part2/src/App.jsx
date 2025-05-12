
import { useRef, useState } from 'react'
import './App.css'

// a clock with a start and stop button
function App() {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  function startClock() {
    let value = setInterval(function() {
      setCurrentCount(c => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    console.log(timer.current);
    clearInterval(timer.current);
  }

  return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>

}

export default App