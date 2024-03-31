import React, { useEffect, useState , useRef} from 'react'
import emailjs from '@emailjs/browser';
import './dashboard.css'

import { signOut } from "firebase/auth";
import { auth } from './firerbase-config';
// import nodemailer from 'nodemailer'
import {useNavigate} from 'react-router-dom';
const DashBoard = () => {

  const [user,setUser] = useState(null);
  const [name,setName]= useState('');
  const [email, setEmail] = useState("");
  const [subject,setSubject]=useState("");
  const [content,setContent] = useState("this is ");
  const [file,setFile] = useState("");
  const [userContent,setUserContent] = useState("");
  const [company,setCompany] = useState("");
  const navigate = useNavigate();
  
  const form = useRef();

  useEffect(()=>{
    const unsubs = auth.onAuthStateChanged(users=>{
      if(users){
        setUser(users);
        console.log(users);
      }
      else{
        setUser(null);
      }
    })
   return ()=>unsubs();
   setContent(`Pre existing text ${email} .......` )
  },[navigate])

  const signout = () => {
    signOut(auth).then(()=>{
      setUser(null);
      navigate('/');
    }).catch((err)=>{
      console.log(err);
    });
  };

  var messageContent = {
    name: 'singh',
    notes: 'this is the message',
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbqa3d2' , 'template_jl0mva4' , form.current ,'Svs4v4u0CouRFjiNI').then((result)=>{
      console.log(result.text);
    },(error) => {
      console.log(error.text);
    });
    form.current.reset();
  };

  const handleOnChange = (e) => {
    setUserContent(e.target.value)
  }
  let displayContent = `Hey ${name},

  Hope you're doing well. I'm a Computer Science student at the University of North Alabama with a 3.59 GPA and am interested in the New-grad SDE position at ${company}.
  
  \n  This past summer, I developed a web app that solved the problem of sending cold emails. It just takes in the email automatically builds a template and sends the email using the MERN tech stack. I've enjoyed developing mobile and web apps before, some of which you can find on my Github here.
  
\n My skills include Artificial Intelligence,  Frontend, Backend, Full-stack, Mobile, and Web development.
  
  \n I've made 4+ open-source projects under my name. Here are some of the useful links for more information: Github,  LinkedIn, Leetcode
  
 \n  I've also attached my resume for your reference. Looking forward to hearing from you! Thank you. Regards,
  Parminder Singh`
  
  return (
    
    <><div className='head'>
       <div className="flex parent-class">
           <div className="sideList">
           <ul className='sideone'></ul>
       </div>
       <div className="logo" >Cold Emailer</div>    
       <div className="login">
           {user? (<div className='usern'>{user.displayName}</div>):(<></>)}
            <div className='signus' onClick={signout}> Logout</div>
       </div>
    </div>
    </div>

    <div className='emailBox'>
      <form ref={form} onSubmit={sendEmail}>
      <div className='Name'>
      <input  placeholder='name' onChange={(e)=> setName(e.target.value)} name='name' value={name} required/>
      </div>
      <div className='company'>
      <input  placeholder='company' onChange={(e)=> setCompany(e.target.value)} name='company' value={company} required/>
      </div>
      <div className='emailName'>
      <input  placeholder='email' onChange={(e)=> setEmail(e.target.value)} name='email' value={email} required/>
      </div>
      <div className='subject'>
                <input type='text' onChange={(e)=> setSubject(e.target.value)} value={subject} placeholder='subject' name='text'required/>

      </div>
      <div className='content'>
              <textarea type='text' value={displayContent} onChange={handleOnChange} name='message' onChange={(e)=> setContent(e.target.value)}  placeholder='enter the content for email' required/>
      </div>
      <div className='file'>
                <input type='file' onChange={(e)=> {const files = Array.from(e.target.files); setFile(files)}}  id='fileinput' name='fileinput' accept=".jpg , .jpeg , .png , pdf" />

      </div>
      <button type="submit">Send</button>
      </form>
    </div>
    </>
  )
}

export default DashBoard
