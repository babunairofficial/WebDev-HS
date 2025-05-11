
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  return <div>
    
    <BrowserRouter>
      <Link to="/">MyCoachingClass</Link> 
      | 
      <Link to="/neet/online-coaching-class-11">Class 11</Link>
      | 
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
        <Route path="/neet/online-coaching-class-12" element={<Class12Program />}></Route>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </div>
}

//component
function Class11Program() {
  return <div>
    NEET programmes for Class 11th
  </div>
}

//component
function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }

  return <div>
    NEET programmes for Class 12th
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}

//component
function Landing() {
  return <div>
    Welcome to your coaching class.
  </div>
}
export default App