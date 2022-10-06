import React from 'react'
import Login from './user/Login';
import SignUp from './user/SignUp';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    let [userLogin, setUserLogin] = useState(null)
    let navigate = useNavigate();
    let onSuccess = (response) => {
        let token = response.credential;
        localStorage.setItem("auth_token", token);
        Swal.fire({
            title: 'Logged in successfully',
            icon: 'success'
        }
        ).then(() => {
            window.location.assign('/');
        })

    }
    let onError = () => {
        alert("Something went wrong try again...")
    }
    let logout = () => {
        Swal.fire({
            title: 'Are you sure to logout?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('auth_token');
                window.location.assign('/');
            }
        })


    }
    let goToBlogs = () => {
        navigate("/results?type=blog");
    }
    let goToStories = () => {
        navigate("/results?type=story");
    }
    let goToArticles = () => {
        navigate("/results?type=article");
    }
    let goToHome = () => {
        navigate("/");
    }
    let goToWritePost = () => {
        navigate("/write-post");
    }
    useEffect(() => {
        let token = localStorage.getItem("auth_token");
        if (token) {

            var decoded = jwt_decode(token);
            setUserLogin(decoded);
           
        }
        else {
            setUserLogin(null);
        }
    }, [])
    return (
        <>
            <GoogleOAuthProvider clientId="340222297158-9qrhavu38qvfjal186n9elqubmmpk29f.apps.googleusercontent.com">
                <Login success={onSuccess} error={onError} />
                <SignUp />
                <nav className="navbar navbar-expand-lg p-1">
                    <div className="container-fluid">

                        <button className="navbar-brand border border-0 btn btn-lg bg-transparent logo " onClick={() => goToHome()}>
                            R<i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon text-light"></span> */}
                            <i className="fa fa-bars text-light" aria-hidden="true"></i>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                            <div className="navbar-nav w-100 ">

                                <button className=" btn text-light" onClick={() => goToHome()}>Home</button>
                                <button className=" btn text-light" onClick={() => goToBlogs()}>Blogs</button>
                                <button className=" btn text-light" onClick={() => goToStories()}>Stories</button>
                                <button className=" btn text-light" onClick={() => goToArticles()}>Articles</button>
                                {userLogin === null ?
                                    (<button className=" btn text-light" data-bs-toggle="modal" data-bs-target="#loggedin">Start Writing</button>) :
                                    (<button className=" btn text-light" onClick={() => goToWritePost()}>Start Writing</button>)
                                }

                                {
                                    userLogin === null ?
                                        (<button className=" btn text-light ms-lg-auto" data-bs-toggle="modal" data-bs-target="#login" href="#"><span className="fa fa-sign-in"></span> Login</button>) :
                                        (

                                            <p className="ms-lg-auto text-light text-md-center text-sm-center">Welcome, {userLogin.name} <button className=" btn text-light " href="#" onClick={logout}><span className="fa fa-sign-out"></span> Logout</button>
                                            </p>
                                        )
                                }

                            </div>
                        </div>
                        <div className="modal" tabIndex="-1" id="loggedin">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Sign in to start writing</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <p>You need to sign in first to start your writng</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn brown" data-bs-toggle="modal" data-bs-target="#login">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </nav>
            </GoogleOAuthProvider>
        </>
    )
}