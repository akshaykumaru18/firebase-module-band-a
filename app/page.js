"use client"
import {useState} from 'react'
import { createAccount, loginWithEmail, resetEmail } from './core/authLogic';
export default function LoginPage(){
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  return <div className='flex flex-col'>
    Login page <br />
    <input id="email" placeholder="Email"
     onChange={(event)=> setEmail(event.target.value)}/> <br />
    <input id="password" placeholder="Password" 
    onChange={(event)=> setPassword(event.target.value)}/> <br />
    <button type="button" className='bg-red-300'
     onClick={async(event)=> {
        await loginWithEmail(email,password)
     }}
    >Login</button>

     <button type="button" className='bg-red-300'
     onClick={async(event)=> {
        await createAccount(email,password)
     }}
    >Create Account</button>
     <button type="button" className='bg-red-300'
     onClick={async(event)=> {
        await resetEmail(email)
     }}
    >Password Reset Email</button>
  </div>
}