import './App.css'
import { Button } from './components/Buttons'
import { Input } from './components/Input'
import { Otp } from './components/Otp'

function App() {
  
  return (
    <>
      <div className='h-screen bg-cyan-900'>
        <Input type={"text"} placeholder={"Username"}>Input</Input>
        <Button disabled={true}>Confirm</Button>
        <Otp></Otp>
          
      </div>
      

    </>
  )
}

export default App
