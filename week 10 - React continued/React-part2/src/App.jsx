import './App.css'


function App() {
  
  function focusOnInput() {
    document.getElementById('name').focus();
    
}


  return <div>
    Sign up
    <input type="text" id='name'/>
    <input type="text" />
    <input type="text" />
    <button onClick={focusOnInput}>Submit</button>
   
  </div>
}

export default App