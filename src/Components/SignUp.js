import React, { useState } from 'react'
import { auth } from './firerbase-config'
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import './SignUp.css'

const SignUp = () => {
    const [password,setPassword] = useState('');
    const [username , setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [done , setDone] = useState(false);
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const signUp = (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(auth,email,password).then((userCred)=>{
                console.log(userCred);
                updateProfile(auth.currentUser,{
                    displayName:username
                })
                
            }).then(()=>{
                console.log("Username set");
                setUser(username);
                navigate('/dashboard');
                setDone(true);
            })
    }
  return (
    <div>
        <div>
             <div className='container'>
             <div className='parent-card'>
             <form onSubmit={signUp} className='form'>
             <div className='heading'>Sign Up</div>
             <input type="username" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)} name="username" required/>
             <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" required/>
             <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="password" required/>
             <button type='submit'>Submit</button>
             </form>
             </div>
             </div>
        </div>
        {
            done ? (
                <>
                <div> {user} , you are loggedin</div>
                </>
            ) :
            (
               
             <div>You are not logged in Yet</div>
               
            )
        }  
    </div>
  )
}

export default SignUp
