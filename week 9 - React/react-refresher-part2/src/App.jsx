

function App() {
  
  const todos = [
    {
      id: 1,
      title: "GO to gym",
      done: false
    }, 
    {
      id: 2,
      title: "Eat Food",
      done: true
    }
  ];
  const todosComponents = todos.map(todo => <Todo key={todo.id} title={todo.title} done={todo.done}></Todo>) //key should be unique
  
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
    <div>
      {todosComponents}

      
      {/* another approach to include Todo component, instead of using todosComponents */}

      {[
        <Todo key={3} title={"play cricket"} done={false}></Todo>
      ]}  
    </div>
    
    
    
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

function Todo({title, done}) {
  return <div>
    {title} - {done ? "Done!" : "Not done!"}
  </div>
}

export default App;