import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div >
            <h1>I am Your Friends!{friends.length}</h1>
          <div className='friend-container'>
          {
                friends.map(friend => (
                <Friend 
                key = {friend.id}
                friend= {friend}
                ></Friend>))
            }
          </div>
        </div>
    );
};

export default Friends;