
import { useRef } from 'react'
import './App.css'


function App() {

  // using a hook for DOM manipulation
  const inputRef = useRef();

  
function focusOnInput() {
  // document.getElementById('name').focus()
  inputRef.current.focus();
}


  return <div>
    Sign up
    <input type="text" id='name' ref={inputRef}/>
    <input type="text" />
    <input type="text" />
    <button onClick={focusOnInput}>Submit</button>
   
  </div>
}

export default App