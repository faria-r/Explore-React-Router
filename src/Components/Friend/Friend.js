import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const  {name,id,email,phone,username,website} = friend;
    return (
        <div className='friend'>
            <p>Name:{name}</p>
            <h3>Email:{email}</h3>
            <p><small>Phone:{phone}</small></p>
            <h2>UserName:<Link to={`/friend/${id}`}>{username}</Link></h2>
            <p>Website:{website}</p>
        </div>
    );
};

export default Friend;