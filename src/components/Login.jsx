import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const Login = ({setIsLoggedIn}) => {
    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")
    const [isValidUsername, setIsValidUsername]=useState(null)
    const [isValidPassword, setIsValidPassword]=useState(null)


    const handleLogin=()=>{
      console.log(username, password);
      import.meta.env.VITE_USERNAME==username && import.meta.env.VITE_PW==password ?setIsLoggedIn(true) : setIsLoggedIn(false)
    }

  return (
    <div className='login'>
      <h3>Login Form</h3>
      <TextField id="standard-basic" label="Username" variant="standard" value={username}
      onChange={(e)=>setUserName(e.target.value)}
      error={!isValidUsername && isValidUsername!=null}
      onBlur={()=>setIsValidUsername(import.meta.env.VITE_USERNAME==username)}
      />
      <TextField id="standard-basic" label="Password" type="password" variant="standard" value={password} 
      onChange={(e)=>setPassword(e.target.value)}
      error={!isValidPassword && isValidPassword!=null}
      onBlur={()=>setIsValidPassword(import.meta.env.VITE_PW==password)}
      />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </div>
  )
}


