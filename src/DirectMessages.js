import { Avatar } from '@material-ui/core';
import React from 'react';
import './DirectMessages.css';

function DirectMessages({avatarImage, username, message, timestamp}) {
    return (
        <div className="directMessages">
            <div className="avatarImage">
                <Avatar src={`https://avatars.dicebear.com/api/male/${avatarImage}.svg`} />
            </div>
            <div className="others">
                <h5>{username}</h5>
                <p>{message} &#8226; {timestamp}</p>
            </div>
        </div>
    )
}

export default DirectMessages;
