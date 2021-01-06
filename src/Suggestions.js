import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './Suggestions.css';
import SuggestionsContent from './SuggestionsContent';


function Suggestions() {

    
    return (
        <div className="suggestions">
            <div className="suggestions__top">
                <div className="suggestinons__left">
                    <Avatar src="https://instagram.fprn4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/91860314_1123000318053901_461521345788772352_n.jpg?_nc_ht=instagram.fprn4-1.fna.fbcdn.net&_nc_ohc=efSO3RY0h6cAX-iqNxR&tp=1&oh=915a05978635a9acd6bf6d7f2ce10756&oe=5FFEC854" />
                    <div className="suggestions__description">
                        <h4>ilirshala7</h4>
                        <p>Ilir Shala </p>
                    </div>
                </div>
                <div className="suggestinons__right">
                    <p>Switch</p>
                </div>
            </div>

            <div className="suggestions__all">
                <h4>Suggestions For You</h4>
                <p>See All</p>
            </div>
            <div className="suggestions__accounts">
                <SuggestionsContent
                    image="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
                    username="lionelmessi"
                    fullName="New to Instagram"
                    request="Follow"
                />
                <SuggestionsContent
                    image="https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTE5NDg0MDU1NDExNDU5NTk5%2Fafter-earth-new-york-premiere---inside-arrivals.jpg"
                    username="50cent"
                    fullName="New to Instagram"
                    request="Follow"
                />
                <SuggestionsContent
                    image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg"
                    username="eminem"
                    fullName="New to Instagram"
                    request="Follow"
                />
                <SuggestionsContent
                    image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093"
                    username="ronaldo7"
                    fullName="New to Instagram"
                    request="Follow"
                />
                <SuggestionsContent
                    image="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzQ4NjA1OTY2/jennifer-lopez-9542231-3-402.jpg"
                    username="jenniferlopez"
                    fullName="New to Instagram"
                    request="Follow"
                />
            </div>
            <p className="copyright">© 2020 INSTAGRAM CLONE FROM ILIR SHALA</p>
        </div>
    )
}

export default Suggestions;
