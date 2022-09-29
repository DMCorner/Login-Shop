import {useState} from 'react'

function OutputBox({Login}) {
      const adminUser = {
    name: "Adam Admin",
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");


  

  const Logout = () => {
    console.log("Logout")
    setUser({name: "", email: ""})
  }


    return (
        <div>
            <div>
            {(user.email != "") ? (
            <div className='welcome'>
              <h2>Welcome, <span>{user.name}</span></h2>
              <button onClick={Logout}>Logout</button>
            </div>
            ) : (
            <div>fdsawfe</div>
           )}
           {(error != "") ? (<div className='error'>{error}</div>) : ""}
            </div>
        </div>
    )
}

export default OutputBox