import {useState} from 'react'
import {details, setDetails} from '../components/LoginForm'

function OutputBox(details) {
    const adminUser = {
    name: "Adam Admin",
    email: "admin@admin.com",
    password: "admin123"
  }
  if (details.name == adminUser.name && details.email == adminUser.email && details.password == adminUser.password) {
    return (
      <div className='bg-black w-96'>
        You have logged in
        </div>
    )
  }}

export default OutputBox