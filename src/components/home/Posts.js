import React, { useEffect, useState } from "react";

import axios from "axios";
import PostItems from './PostItems';
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer";

function Posts() {
    let [blogType, setBlogType] = useState([])
    let [storyType, setStoryType] = useState([])
    let [articleType, setArticleType] = useState([])
    let navigate = useNavigate();
    let goToResults = (type) => {
        navigate("/results?type="+type);
    }

    let getBlogData = async () => {
        let URL = 'https://readshorts-backend.onrender.com/api/get-blog';


        try {
            let response = await axios.get(URL);
            let { status, blog } = response.data;
            if (status) {
                setBlogType([...blog]);
            }
            else {
                alert("Blogs not found");
            }
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };
    let getStoryData = async () => {
        let URL = 'https://readshorts-backend.onrender.com/api/get-story';


        try {
            let response = await axios.get(URL);
            let { status, story } = response.data;
            if (status) {
                setStoryType([...story]);
            }
            else {
                alert("Stories not found");
            }
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };
    let getArticleData = async () => {
        let URL = 'https://readshorts-backend.onrender.com/api/get-article';


        try {
            let response = await axios.get(URL);
            let { status, article } = response.data;
            if (status) {
                setArticleType([...article]);
            }
            else {
                alert("Articles not found");
            }
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };
    useEffect(() => {
        getBlogData();
        getStoryData();
        getArticleData();
    },[])

    return (
        <>

            <div className="container mt-3 ">
                <h3 className="mb-3 fw-bold mt-3">Blogs<i className="fa fa-pencil color-brown " aria-hidden="true"></i></h3>
                <div className="row">
                    {
                        blogType.map((post) => {


                            return <PostItems post={post} key={post._id} />;

                        })

                    }
                    <span><button className="btn brown" onClick={()=>goToResults("blog")}>More..</button></span>
                </div>
                <h3 className="mb-3 fw-bold mt-3">Stories<i className="fa fa-globe color-brown" aria-hidden="true"></i></h3>
                <div className="row">
                    {
                        storyType.map((post) => {


                            return <PostItems post={post} key={post._id} />;

                        })

                    }
                    <span><button className="btn brown" onClick={()=>goToResults("story")}>More..</button></span>
                </div>
                <h3 className="mb-3 fw-bold mt-3">Articles<i className="fa fa-book color-brown" aria-hidden="true"></i></h3>
                <div className="row">
                    {
                        articleType.map((post) => {


                            return <PostItems post={post} key={post._id} />;

                        })

                    }
                    <span><button className="btn brown mb-2" onClick={()=>goToResults("article")}>More..</button></span>
                </div>


            </div>
            <Footer/>
        </>
    );
}
export default Posts;