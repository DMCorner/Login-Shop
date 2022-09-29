import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import TopNavigation from '../components/TopNav.jsx'
import  loginCode  from '../components/loginCode.js'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'
import React from "react";
import Explanation from '../components/Explanation'
import OutputBox from '../components/OutputBox'





function Home() {
  const adminUser = {
    name: "Adam Admin",
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = (details: { name: string; email: string; password: string }) => {{
    console.log(details);

    if (details.name == adminUser.name && details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      console.log({
        name: details.name,
        email: details.email
      }

        )
    } else {
      console.log("details do not match");
      setError(("details do not match"))
    }
  }
}
  

  const Logout = () => {
    console.log("Logout")
    setUser({name: "", email: ""})
  }

  return (
      <div className="grid grid-cols-5 min-h-screen flex-col items-center justify-center py-2 space-x-2">
        <div></div>

        <div className='form-inner bg-slate-500 rounded-3xl p-5'>
          <Explanation/>
        </div>

        <div>
          {(user.email != "") ? (
            <div className='welcome'>
              <h2>Welcome, <span>{user.name}</span></h2>
              <button onClick={Logout}>Logout</button>
            </div>
            ) : (
            <LoginForm Login={Login} error={error}/>
           )}
        </div>

        <div className='form-inner bg-slate-500 rounded-3xl p-5'>
              <OutputBox  Login={Login} error={error}/>
        </div>

          <div></div>
      </div>
        
  )
}

export default Home