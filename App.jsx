import { useEffect, useState } from "react"
export default function App() {
  const [name, setname] = useState('Change')
  const [count, setCount] = useState(0)
  const [User, setUser] =useState('')
  useEffect(() =>{
    console.log('Counted Number:', count)
  },[count])
  return (
    <>
    <button onClick={() => setname('Button A')}>Home</button>
    <button onClick={() => setname('Button B')}>About Us</button>
    <button onClick={() => setname('Button C')}>Contact Us</button>
    <p>{name}</p>

    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button><br></br>
    <input type="text" onChange={(e) => setUser(e.target.value)}/>
    <p>My Name: {User}</p>
    </>
  )
}


