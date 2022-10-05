import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Friend/Friend.css'

const SinglePost = ({post}) => {
   
    const {title,body,id} = post;
    console.log(post)
    const navigate = useNavigate();
    const handleNavigate = ()=>{
navigate(`/post/${id}`);
    }
    return (
        <div className='friend'>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleNavigate}>Show Details</button>
            <Link to={`/post/${id}`}> 
            <button>Show Details</button></Link>
           
        </div>
    );
};

export default SinglePost;