import React from 'react';
import './PostsContent.css';
import { Avatar } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function PostsContent({ avatarImage, username, Icon, image, likes, timestamp, comment }) {
    return (
        <div className="postsContent">
            <div className="postsContent__header">
                <div className="left">
                    <Avatar src={avatarImage} />
                    <h4>{username}</h4>
                </div>
                <div className="right">
                    <Icon className="moreIcon" />
                </div>
            </div>
            <div className="postContents__image">
                <img src={image} alt="" />
            </div>
            <div className="icons">
                <div className="icons__left">
                    <FavoriteBorderIcon className="likeButton"/>
                    <ChatBubbleOutlineIcon />
                    <SendOutlinedIcon />
                </div>
                <div className="icons__right">
                    <BookmarkBorderIcon />
                </div>
            </div>
            <div className="likes">
                <p>Liked by <strong>{likes}</strong> and <strong>others</strong></p>
            </div>
            <div className="timestamp">
                <p>{timestamp}</p>
            </div>
            <hr className="horizontal"/>
            <div className="inputs">
                <input placeholder="Add a comment..." type="text"/>
                <p>Post</p>
            </div>
        </div>
    )
}

export default PostsContent;
