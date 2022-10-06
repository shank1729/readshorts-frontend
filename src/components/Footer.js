import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
    let navigate = useNavigate();
    let goToAboutUs = () => {
        navigate("/about-us");
    }
  return (
    <>
    <footer className="container-fluid brown text-center">
                <button className='btn btn-transparent text-light' onClick={()=>goToAboutUs()} >About us</button>
            </footer>
    </>
  )
}

export default Footer