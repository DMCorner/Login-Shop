import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import TopNavigation from '../components/TopNav.jsx'
import  loginCode  from '../components/loginCode.js'
import Link from 'next/link'
import LoginForm from '../components/LoginForm.js'
import React from "react";
import Explanation from '../components/Explanation.js'
import OutputBox from '../components/OutputBox.js'





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
      <div className="grid grid-cols-2 min-h-screen flex-col items-center justify-center py-2 space-x-5  bg-zinc-900">
        

        <div className='w-1/2 bg-gradient-to-b from-amber-400 to-amber-600 rounded-3xl p-5 translate-x-3 border-black border-4'>
          
          <Explanation/>
        </div>

        <div className=' -translate-x-1/2 form-inner bg-gradient-to-b from-amber-400 to-amber-600 rounded-3xl p-5 border-black border-4'>

            <LoginForm Login={Login} />

        </div>



          
      </div>
        
  )
}

export default Home