import React, {useState} from 'react'
import OutputBox from '../components/OutputBox.js'


function LoginForm({Login}) {
  const [details, setDetails] = useState({name: "",email: "", password: ""});
  const [error, setError] = useState("")

    const adminUser = {
    name: "Adam Admin",
    email: "admin@admin.com",
    password: "admin123"
  }

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  function errorRead() {
    let error = "";
    console.log(error)
    if ( details.name == adminUser.name & details.email == adminUser.email & details.password != adminUser.password) {
      setError("Password is incorrect.")
     } if (details.name == adminUser.name & details.email != adminUser.email & details.password == adminUser.password) {
      setError("Email is incorrect.")
     } if (details.name != adminUser.name & details.email == adminUser.email & details.password == adminUser.password) {
      setError("Username is incorrect.")
     } if (details.name.toUpperCase() == adminUser.name.toUpperCase() & details.name != adminUser.name) {
      setError("Name inputs are case sensitive.")
     } if (details.email.toUpperCase() == adminUser.email.toUpperCase() & details.email != adminUser.email) {
      setError("Email inputs are case sensitive.")
     } if (details.password.toUpperCase() == adminUser.password.toUpperCase() & details.password != adminUser.password) {
      setError("Password inputs are case sensitive.")
     }
  }


  
  return (
      <form onSubmit={submitHandler} className="inline">
        <div className='form-inner rounded-3xl p-5 grid grid-cols-2'>
          <div className='form-group px-5'>
          <h2 className=' font-bold text-4xl text-center bg-gradient-to-b from-amber-400 to-amber-600 rounded-3xl p-5 text-black underline shadow-lg border-black border-4'>Login</h2>
            
            <div className='form-group p-5'>
              <label htmlFor="name" className='text-xl rounded-t-3xl bg-gradient-to-b from-amber-400 to-amber-600 p-3 border-2'>Username:</label>
              <input className='text-xl w-full rounded-r-3xl rounded-b-3xl p-2 pl-3 ' type="text" name="name" id="name" 
              onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group p-5'>
              <label htmlFor="email " className='text-xl rounded-t-3xl bg-gradient-to-b from-amber-400 to-amber-600 p-3 border-2'>Email:</label>
              <input className='text-xl w-full rounded-r-3xl rounded-b-3xl p-2 pl-3 bg-white' type="email" name="email" id="email" 
              onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group p-5'>
              <label htmlFor='password' className='text-xl rounded-t-3xl bg-gradient-to-b from-amber-400 to-amber-600 p-3 border-2'>Password:</label>
              <input className='text-xl w-full rounded-r-3xl rounded-b-3xl p-2 pl-3 bg-white' type="password" name="password" id="password" 
                onChange={e => setDetails({...details, password: e.target.value})} value={details.password}>
              </input>
            </div>
            

            
              

          </div>
          <div className='form-group px-5'>
            <div className=' font-bold text-4xl text-center bg-gradient-to-b from-amber-400 to-amber-600 rounded-3xl p-5 text-black underline shadow-lg border-black border-4'>Output</div>
            <div className='h-5'>
            </div>

              {console.log("here",details)}
              {console.log("error outside",error)}
              

              { (details.name == "Adam Admin" & details.email == "admin@admin.com" & details.password == "admin123") ? (
                <div className=''>
                  <div className='text-xl rounded-3xl bg-white p-2'>
                    <div className='welcome'>
                      <h2>Welcome, <span>{details.name}.</span></h2><br></br>
                      <h2>Your email is: <span>{details.email}</span></h2><br></br>
                      <h2>Your password is: <span>{details.password}</span></h2><br></br>
                    </div>
                  </div>
                </div>
            ) : (
            <div className=''>
                  
                  <div className='text-xl rounded-3xl bg-white p-2 h-44'>
                    <div className='welcome'>
                      {console.log("error inside",error)}
                      <h2>{error}</h2>
                    </div>
                  </div>
                </div>
           )}
           <div className='h-5'>
            </div>
           <input type="submit" value="LOGIN" className="bg-gradient-to-b from-amber-400 to-amber-600 border-black border-4 font-bold p-5 rounded-3xl w-32 hover:cursor-pointer focus:ring-2 ring-offset-4"
              onClick={errorRead}>
              </input>
           <OutputBox details={details}></OutputBox>
          </div>
        </div>
      </form>
)}


export default LoginForm