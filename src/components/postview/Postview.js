import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './../Header';
import Footer from '../Footer';


export default function Postview() {
    let params = useParams();
    let initPost = {

        date: "",
        title: "",
        type: "",

        main_img: "",
        para: [],
        img: [],
        likes: 0,
        category: "",
        summary: "",
        author: "",
        pfp:"",
        _id: "-1",

    };
    let [pDetails, setPDetails] = useState({ ...initPost });
    let getPostDetails = async () => {
        let URL = "https://readshorts-backend.onrender.com/api/get-post-by-id/" + params.id;
        console.log(URL)
        try {
            let response = await axios.get(URL);
            let data = response.data;
            if (data.status === true) {
                setPDetails({ ...data.result });
            } else {
                setPDetails({ ...initPost });
            }
        } catch (error) {
            alert("Error");
            console.log(error);
        }
    }; 
    let imgPara = () =>{
        const rows=[];
        for (let i = 0; i < 4; i++) {
            if(i < pDetails.img.length && pDetails.img[i]!="")
            {
                
                rows.push(<div className="text-center" >
                <img src={pDetails.img[i]} className="img-fluid" max-width={"100%"} style={{height:250}} alt="" /> </div> );
            }
            if(i < pDetails.para.length && pDetails.para[i]!="")
            {
                rows.push(<p className="mt-3" >{pDetails.para[i]}</p>);
            }
            
        }
        return <div className="container">{rows}</div>;
    } 

    useEffect(() => {
        getPostDetails();
    }, []);
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row  ">
                    <div className="col-sm-2 sidenav content">

                        <div className="row p-3">
                            <div className="col-sm-12 mb-2">
                                <img src={(pDetails.pfp!=null)?(pDetails.pfp):"https://static.vecteezy.com/system/resources/previews/008/302/417/non_2x/eps10-brown-user-solid-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"} height="100" width="100" alt=""/>
                            </div>

                            <div>
                                <h3>{pDetails.author}</h3>
                                <p className="text-muted">Author</p>
                                {/* <span>"{pDetails.summary}"</span> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9 p-4">
                        {/* <big><p className="text-muted mb-1">{pDetails.type}</p></big>
                        <hr className="mt-1"/> */}
                        <h2 className="mt-2">{pDetails.title}</h2>
                        <h6><i className="fa fa-calendar" aria-hidden="true"></i> {pDetails.date}</h6>
                        <p><span className="badge brown mb-2">{pDetails.category}</span></p>
                        {
                         imgPara()}
                        
                            
                            
                            
                            {/* <div><p><button type="button" className="btn btn-sm p-0 btn-danger glyphicon glyphicon-heart-empty"> <span className="badge">7</span></button></p></div> */}
                        
                        
                        

                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}
