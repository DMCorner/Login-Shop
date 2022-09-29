import React, {useState} from 'react'


function LoginForm({Login,error}) {
  const [details, setDetails] = useState({name: "",email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }
  
  return (
      <form onSubmit={submitHandler} className="inline ">
        <div className='form-inner inline-block bg-slate-500 rounded-3xl p-5'>
          <h2 className=' font-bold text-4xl text-center bg-slate-600 rounded-3xl p-5 text-white underline shadow-lg border-black border-4'>Login</h2>
            
            <div className='form-group p-5'>
              <label htmlFor="name" className='text-xl rounded-t-3xl bg-slate-400 p-2'>Name:</label>
              <input className='text-xl rounded-r-3xl rounded-b-3xl p-2 pl-3' type="text" name="name" id="name" 
              onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group p-5'>
              <label htmlFor="email " className='text-xl rounded-t-3xl bg-slate-400 p-2'>Email:</label>
              <input className='text-xl rounded-r-3xl rounded-b-3xl p-2 pl-3' type="email" name="email" id="email" 
              onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group p-5'>
              <label htmlFor='password' className='text-xl rounded-t-3xl bg-slate-400 p-2'>Password:</label>
              <input className='text-xl rounded-r-3xl rounded-b-3xl p-2 pl-3' type="password" name="password" id="password" 
                onChange={e => setDetails({...details, password: e.target.value})} value={details.password}>
              </input>
            </div>
            <div className='form-group p-5 w-1/2'>
              <input type="submit" value="LOGIN" className="bg-blue-500 border-black border-4 font-bold p-5 rounded-3xl w-32 hover:cursor-pointer"></input>
              
            </div>
        </div>
      </form>
)}


export default LoginForm