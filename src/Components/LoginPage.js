import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import {auth} from './firerbase-config';
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
// import DashBoard from './DashBoard';
import {useNavigate} from 'react-router-dom'
const LoginPage = () => {
    const [password, setPassword] =  useState();
    const [email  , setEmail] = useState();
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    const login = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth , email , password).then((userCreds) => {
                 const user = userCreds.user;
                 setUser(user);
                //  navigate('/dashboard')

            }).catch((err)=>{
                console.log(err);
            })
    }

    useEffect(()=>{
        const subs = auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser(null);
            }
        })
        return ()=> subs();
    })

    const logout = (e) =>{
        signOut(auth).then((user)=>setUser(null)).catch((err)=>console.log(err))
    }
  return (
    <>
    <div className='container'>
        <div className='parent-card'>
           <form onSubmit={login} className='form'>
            <div className='heading'>Login</div>
            <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} name="email" required/>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="password" name="password" required/>
            <button type='submit'>Submit</button>
           </form>

        </div>
   </div>
     {
        user ? (
            <>
            Hi ${user.email}!!!
            <button onClick={logout}>Logout</button>
            </>
        ):
        (
            <div>you are not logged in Yet</div>
        )
     }
    </>
 )
}

export default LoginPage
