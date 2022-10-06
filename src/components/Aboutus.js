import React from 'react'
import Header from './Header';


function Aboutus() {

  return (
    <>
    <Header/>
    <div className='aboutus'>
    </div>
    <div className='contain mt-2'>
    <p class="line-1 anim-typewriter fw-bold">A platform to share your ideas, stories and more</p>
    </div>
    <div className='d-flex justify-content-center text-center mt-2'>
        <p className='w-50'>
            At Readshorts, we give everyone a chance to showcase their writing talents and send their message to every corner of the world. We provide a simple user-friendly interface for the readers as well as the writers. 
        </p>
    </div>
    <div className='d-flex justify-content-center flex-wrap'>
    <img src='https://images.unsplash.com/photo-1606159068539-43f36b99d1b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&h=330&q=80' className='img-fluid'/>
    <img src='https://images.unsplash.com/photo-1505744386214-51dba16a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&h=330&q=80' className='img-fluid'/>
    <img src='https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&h=330&q=80' className='img-fluid'/>
    </div>
    </>
  )
}

export default Aboutus