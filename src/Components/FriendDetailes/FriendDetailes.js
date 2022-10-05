import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetailes = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h2>Everything You Need To Know About Me!</h2>
            <p>I am:{friend.name}</p>
            <h4>Phone:{friend.phone}</h4>
        </div>
    );
};

export default FriendDetailes;