import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header__content">
                <div className="left">
                    <Link to={`/`}>
                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                    </Link>

                </div>
                <div className="header__input">
                    <input type="text" placeholder="Search" />
                    <SearchIcon />
                </div>
                <div className="right">
                    <Link to={`/`}>
                        <HomeIcon />
                    </Link>

                    <Link to={`/direct`}>
                        <SendOutlinedIcon />
                    </Link>

                    <ExploreOutlinedIcon />
                    <FavoriteBorderOutlinedIcon />
                    <Avatar src="https://instagram.fprn4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/91860314_1123000318053901_461521345788772352_n.jpg?_nc_ht=instagram.fprn4-1.fna.fbcdn.net&_nc_ohc=efSO3RY0h6cAX-iqNxR&tp=1&oh=915a05978635a9acd6bf6d7f2ce10756&oe=5FFEC854" />
                </div>
            </div>
        </div>
    )
}

export default Header
