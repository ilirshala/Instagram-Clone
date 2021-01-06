import React from 'react';
import './StoriesContent.css';

function StoriesContent({image,name}) {
    return (
        <div className="storiesContent">
            <div className="content">
                <div className="content__image">
                    <img src={image} alt=""/>
                </div>
            <p>{name}</p>
            </div>

        </div>
    )
}

export default StoriesContent
