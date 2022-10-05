import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';
import '../Friends/Friends.css'

const Post = () => {
    const posts = useLoaderData();

    return (
        <div>
            <h2>post are Here!</h2>
           <div className='friend-container'>
           {
                posts.map(post => <SinglePost
                key={post.id}
                post= {post}
                ></SinglePost>)
            }
           </div>
        </div>
    );
};

export default Post;