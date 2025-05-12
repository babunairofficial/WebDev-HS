
import './App.css'


function App() {
  return <div>
    Sign up
    <input type="text" id='name'/>
    <input type="text" />
    <input type="text" />
    <button onClick={focusOnInput}>Submit</button>
   
  </div>
}

function focusOnInput() {
  document.getElementById('name').focus()
}

export default App