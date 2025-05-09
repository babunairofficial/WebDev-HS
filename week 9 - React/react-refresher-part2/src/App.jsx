import { useEffect, useState } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  
  return <div style={{display: "flex", background: "grey"}}>
    <Card >
      <h2>Card Title</h2>
      <p>There is some content inside the card.</p>
      <div style={{color: "green"}}>
        hello there 
        <input type={"text"}></input>
      </div>
    </Card>
    <Card>
      <h2>Another Card</h2>
      <textarea type="text"></textarea>
    </Card>
  </div>
}

function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      background: "white", 
      borderRadius: 10, 
      padding: 20, 
      margin: 10,
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
      }}>
        {children}
    </div>
  );
}

export default App