import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Header from "../Header";
import { useSearchParams } from "react-router-dom";
import Footer from './../Footer';

function Results() {
    let [categoryType, setCategoryType] = useState([])
    let [searchParams] = useSearchParams();
    let [postResult, setPostResult] = useState([])
    let [title, setTitle] = useState([])
    let [typee, setType] = useState([])
    // let [searchPar, setSearchPar] = useState([])
    let nav = useNavigate();
    let goToPostByCategory = (typee,catid) => {
        nav("/results?type="+typee+"&category_id="+catid);
        // setSearchPar(searchParams.getAll());
    }
    let getPostDetails = async () => {
        let URL = "https://sheltered-sea-15851.herokuapp.com/api/get-post";

        if (searchParams.get("type") ) {

            let type = searchParams.get("type");
            
            URL = "https://sheltered-sea-15851.herokuapp.com/api/get-post?typ=" + type;
            if(searchParams.get("category_id"))
            {
                let id=searchParams.get("category_id");
                URL = "https://sheltered-sea-15851.herokuapp.com/api/get-post?typ=" + type + "&id=" + id;
            }
            setType(type);
            setTitle(type === "blog" ? "Blogs" : type === "article" ? "Articles" : type === "story" ? "Stories" : "Posts");
        }
        try {
            let response = await axios.get(URL);
            let data = response.data;
            setPostResult([...data.post]);

        }
        catch (error) {
            alert("Error");
            console.log(error);
        }
    }
    let getCategoryData = async () => {
        let URL = 'https://sheltered-sea-15851.herokuapp.com/api/get-category';


        try {
            let response = await axios.get(URL);
            let { status, cat } = response.data;
            if (status) {
                setCategoryType([...cat]);
            }
            else {
                alert("Results not found");
            }
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };
    let navigate=useNavigate();
    let goToPost=(id)=>{
    navigate("/post/"+id);

  };
    useEffect(() => {
        getCategoryData();
        getPostDetails();

    }, [])
    useEffect(() => {
        
        getPostDetails();

    }, [searchParams])
    
    return (
        <>
            <Header /> 
            <div className="light-brown">
                <div className="container ">
                    <div className="row ">
                        
                        <div className="col-12 col-lg-3 col-md-4  mt-2 ">
                            <h4>Results <span className="fw-semi-bold">Filtering</span></h4>
                            <p className="text-muted fs-mini">Listed content is categorized by the following groups:</p>
                            <ul className="nav  nav-stacked search-result-categories ">
                                {
                                    categoryType.map((category) => {


                                        return (
                                            <>
                                                <li ><button className="btn btn-sm bg-transparent" onClick={()=>goToPostByCategory(typee,category.category_id)}>{category.category} <span className="badge brown">{category.number}</span></button>
                                                </li>
                                            </>
                                        )

                                    })

                                }


                            </ul>
                        </div>
                        
                        <div className="col-12 col-lg-9 col-md-8"> 
                            <h1 className="fw-bold my-3">{title}</h1>
                            {
                                postResult.map((item, index) => {
                                    return (
                                       
                                        <>
                                            <div className="col-12 post-shadow p-4 mb-4"  onClick={() => goToPost(item._id)}>
                                                <div className=" d-flex column align-items-center ">
                                                    <div className="me-4 mb-2">
                                                    <img src={item.main_img} className="post-item" alt="No image provided"/>
                                                    </div>
                                                    
                                                    <div className="m-0">
                                                        <p className="h4 fw-bold">{item.title}</p>
                                                        <p><span className="badge brown ">{item.category}</span></p>
                                                        <p className="m-0 text-muted">

                                                            {item.summary}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* <hr /> */}
                                                <div className="d-flex flex-column">
                                                    
                                                <a className="align-self-end btn  brown " >More...</a>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Results