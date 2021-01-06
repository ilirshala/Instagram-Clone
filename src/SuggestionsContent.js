import React, { useState } from 'react';
import './SuggestionsContent.css';
import { Avatar } from '@material-ui/core';

function SuggestionsContent({image,username, fullName, request}) {


    return (
        <div className="suggestionsContent">
            <div className="suggestionsContent__top">
                <div className="suggestionsContent__left">
                    <Avatar src={image} />
                    <div className="suggestionsContent__description">
                        <h4>{username}</h4>
                        <p>{fullName} </p>
                    </div>
                </div>
                <div className="suggestionsContent__right">
                    <p>{request}</p>
                </div>
            </div>
        </div>
    )
}

export default SuggestionsContent;
