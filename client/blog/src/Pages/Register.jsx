import { useState } from "react"

export default function Register() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function registerUser(e) {
    e.preventDefault();
      const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify({username,password})
           })
          console.log('registering user')
  if(response.status === 200) {
         alert('Registered successfully');
    }
  else {
      alert('Failed to register');
}
}

  return (
    <form className='register' onSubmit={registerUser}>
        <h1>Register</h1>
    <input type="text" 
        placeholder="username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
    <input type="password" 
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
        <button >
            Register
        </button>
</form>
  )
}
