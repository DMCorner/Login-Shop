import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen flex-col items-center justify-center py-2">
          <div className=''>

              <form >
                <div className="grid grid-cols-2 grid-rows-1">
                  
                      <div><label className='contact-me-form'>It worked </label> <br></br>
                        <input type="name" name="subject" placeholder="Enter Username" className='rounded-3xl p-2'/><br></br>
                      
                        </div>
                        <div>
                      <label className='contact-me-form'>Password=Buzz </label><br></br>
                        <input type="email" name="email" placeholder="Enter Password" className='rounded-3xl p-2'/><br></br>
                      
                    </div>
                    <div className='row-span-2 grid grid-cols-3'>
                  </div>
                  </div>
               <input type="submit" value="Submit"  className='bg-red-500 p-5 rounded-3xl hover:cursor-pointer'/>
              </form>
          </div>
    </div>
  )
}

export default Home