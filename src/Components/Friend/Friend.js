import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
    const  {name,email,phone,username,website} = friend;
    return (
        <div className='friend'>
            <p>Name:{name}</p>
            <h3>Email:{email}</h3>
            <p><small>Phone:{phone}</small></p>
            <h2>UserName:{username}</h2>
            <p>Website:{website}</p>
        </div>
    );
};

export default Friend;