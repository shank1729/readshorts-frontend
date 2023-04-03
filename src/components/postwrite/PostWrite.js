import React from 'react'
import Header from '../Header'
import { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import Footer from '../Footer';

export default function PostWrite() {
    let [userLogin, setUserLogin] = useState(null)
    
    var objToday = new Date(),

        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        month = months[objToday.getMonth()],
        currentdate = month + " " + objToday.getDate() + " " + objToday.getFullYear();
    var cat = new Array('0','Marketing','Manufacturing','Healthcare','Self-improvement','Technology','Romance','Fantasy','Detective','Horror','Historical','Cultural','Short Story','Education','Journal','News')
    let initPost = {
        user_id: "6325b3df8e21d773b675d761",
        date: currentdate,
        title: "",
        type: "",
        summary: "",
        category_id: 0,
        main_img: "",
        para: [],
        img: [],
        category: "",
        author: "",
        pfp: ""
    };
    let [post, setPost] = useState({ ...initPost });
    let name, value;
    let handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;
        if (name == "para1" || name == "para2" || name == "para3" || name == "para4") {
            let paragraph = "";
            switch (name) {
                case "para1":
                    paragraph = [value, post.para[1], post.para[2], post.para[3]];
                    break;
                case "para2":
                    paragraph = [post.para[0], value, post.para[2], post.para[3]];
                    break;
                case "para3":
                    paragraph = [post.para[0], post.para[1], value, post.para[3]];
                    break;
                case "para4":
                    paragraph = [post.para[0], post.para[1], post.para[2], value];
                    break;
            }
            let paragraphh = paragraph.map((item,index) =>{
                if(typeof item === 'undefined'){
                return "";
                }
                return item;

            })
            setPost({...post,["para"]:[...paragraphh]})
        }
        else if (name == "img1" || name == "img2" || name == "img3" || name == "img4") {
            let image = "";
            switch (name) {
                case "img1":
                    image = [value, post.img[1], post.img[2], post.img[3]];
                    break;
                case "img2":
                    image = [post.img[0], value, post.img[2], post.img[3]];
                    break;
                case "img3":
                    image = [post.img[0], post.img[1], value, post.img[3]];
                    break;
                case "img4":
                    image = [post.img[0], post.img[1], post.img[2], value];
                    break;
            }
            let imagee = image.map((item,index) =>{
                if(typeof item === 'undefined'){
                return "";
                }
                return item;

            })
            setPost({...post,["img"]:[...imagee]})
        }
        else{
            if(name=="category")
            {
                post.category_id = cat.indexOf(value);
            }
            post.pfp = userLogin.picture;
            post.author = userLogin.name;
        setPost({ ...post, [name]: value });
        }
        // }
        console.log("post")
        console.log(post)
        // let URL = "https://sheltered-sea-15851.herokuapp.com/api/get-post-by-id/";
        // console.log(URL)
        // try {
        //     let response = await axios.post(URL);
        //     let data = response.data;
        //     if (data.status === true) {
        //         setPDetails({ ...data.result });
        //     } else {
        //         setPDetails({ ...initPost });
        //     }
        // } catch (error) {
        //     alert("Error");
        //     console.log(error);
        // }

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let URL = "https://readshorts-backend.onrender.com/api/add-post";
        
        axios.post(URL, post).then((response) => {
            console.log(response.status);
            console.log(response.data);
           
          });
          Swal.fire({
            title:'Good job!',
            text: 'Your '+ post.type + ' has been posted successfully! Check it out',
            icon:'success',
            timer :5000
    }).then(() => {
        window.location.assign("/results?type="+post.type);
    })
          
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
            <Header />
            <div className="light-brown  pt-2">
                <form className="container"onSubmit={handleSubmit}>
                    <h2>Write up your post</h2>
                    <div className="form-group">

                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input type="text" name="title" className="form-control" placeholder="Write the title" value={post.title} onChange={handleInputs} />
                    </div>
                    {/*  <div className="form-group"> */}

                        {/* <label htmlFor="exampleFormControlInput1">Author</label>
                        <input type="text" name="author" className="form-control" value={post.author} onChange={handleInputs} />
                    </div> */} 
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1" className="form-label">Select the type of your post</label>
                        <select className="form-control form-select" name="type" id="exampleFormControlSelect1" value={post.type} onChange={handleInputs}>
                        <option value="" selected disabled hidden>Choose here</option>
                            <option>blog</option>
                            <option>story</option>
                            <option>article</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1"className="form-label">Select the category</label>
                        <select className="form-control form-select" name="category" id="exampleFormControlSelect1" value={post.category} onChange={handleInputs}>
                        <option value="" selected disabled hidden>Choose here</option>
                            <option>Marketing</option>
                            <option>Manufacturing</option>
                            <option>Healthcare</option>
                            <option>Self-improvement</option>
                            <option>Technology</option>
                            <option>Romance</option>
                            <option>Fantasy</option>
                            <option>Detective</option>
                            <option>Horror</option>
                            <option>Historical</option>
                            <option>Cultural</option>
                            <option>Short Story</option>
                            <option>Education</option>
                            <option>Journal</option>
                            <option>News</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">A small summary to catch the eyes</label>
                        <textarea className="form-control" name="summary" id="exampleFormControlTextarea1" rows="3" value={post.summary} onChange={handleInputs}></textarea>
                    </div>
                    <div className="form-group">

                        <label htmlFor="exampleFormControlInput1">Link of your Main image</label>
                        <input type="url" className="form-control" name="main_img" id="exampleFormControlInput1" value={post.main_img} onChange={handleInputs} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">First paragraph</label>
                        <textarea className="form-control" name="para1" id="exampleFormControlTextarea1" rows="5" value={post.para[0]} onChange={handleInputs}></textarea>
                    </div>
                    <div className="form-group">

                        <label htmlFor="exampleFormControlInput1">Link of your first image</label>
                        <input type="url" className="form-control" name="img1" id="exampleFormControlInput1" value={post.img[0]} onChange={handleInputs} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Second paragraph</label>
                        <textarea className="form-control" name="para2" id="exampleFormControlTextarea1" rows="5" value={post.para[1]} onChange={handleInputs}></textarea>
                    </div>
                    <div className="form-group">

                        <label htmlFor="exampleFormControlInput1">Link of your second image</label>
                        <input type="url" className="form-control" name="img2" id="exampleFormControlInput1" value={post.img[1]} onChange={handleInputs} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Third paragraph</label>
                        <textarea className="form-control" name="para3" id="exampleFormControlTextarea1" rows="5" value={post.para[2]} onChange={handleInputs}></textarea>
                    </div>
                    <div className="form-group">

                        <label htmlFor="exampleFormControlInput1">Link of your third image</label>
                        <input type="url" name="img3" className="form-control" id="exampleFormControlInput1" value={post.img[2]} onChange={handleInputs} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Fourth paragraph</label>
                        <textarea className="form-control" name="para4" id="exampleFormControlTextarea1" rows="5" value={post.para[3]} onChange={handleInputs}></textarea>
                    </div>
                    <div className="form-group">

                        <label htmlFor="exampleFormControlInput1">Link of your fourth image</label>
                        <input type="url" className="form-control" name="img4" id="exampleFormControlInput1" value={post.img[3]} onChange={handleInputs} />
                    </div>
                    <button type="submit" className="btn brown mt-2 mb-2">Submit</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}
