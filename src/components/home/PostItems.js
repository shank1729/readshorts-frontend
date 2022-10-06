import React from 'react';
import {useNavigate} from 'react-router-dom';

function PostItems(props) {
  let { post } = props;
  let navigate=useNavigate();
  let goToPost= (id) =>{
    navigate("/post/"+id);
  };
  return (
    <>

    
    <div className="col-sm-3 mb-3 mx-2 p-2  post-shadow"onClick={() => goToPost(post._id)}>
      <img src={post.main_img} className="img-fluid" max-width={"100%"} height="auto" alt="Image not provided" />
      <h5 className="mt-1">{post.title}</h5>
      <span className="badge brown ">{post.category}</span>
      {/* <!-- <button type="button" className="btn btn-sm p-0 btn-danger glyphicon glyphicon-heart-empty"> <span className="badge">7</span></button> --> */}
      
    </div>

    </>
  );
}

export default PostItems
