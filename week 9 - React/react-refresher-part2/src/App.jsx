import { useEffect, useState } from "react";


function App() {
  const [isComponentShown, setIsComponentShown] = useState(true);

  return (
    <div>
      {isComponentShown && <MyComponent></MyComponent>}
    </div>
  )
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');

  }, [count]);

  useEffect(() => {
    console.log('Component mounted');
    return() =>{
      console.log('Compoent will unmount');
    };
  }, [])
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App;