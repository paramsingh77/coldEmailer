import React from 'react'
import Navbar from './Navbar'
import './LandingPage.css'
import {useNavigate} from 'react-router-dom'
const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div className='parent-container'>
        <div className='buttons flex'>
            <div onClick={()=> navigate('/signup')} className='signup'>Sign up</div>
            <div  onClick={()=> navigate('/login')} className='signin'>Sign In</div>
        </div>
        </div>
       
    </div>
  )
}

export default LandingPage
