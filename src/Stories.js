import React from 'react';
import './Stories.css';
import StoriesContent from './StoriesContent';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PostsContent from './PostsContent';
import { Avatar } from '@material-ui/core';



function Stories() {
    return (
        <div className="stories">
            <div className="stories__content">
                <StoriesContent
                    image="https://images.computerhistory.org/tdih/06january-2.jpg?w=600"
                    name="fabriceBelard"
                />
                <StoriesContent
                    image="https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2"
                    name="markzuckerberg"
                />
                <StoriesContent
                    image="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg"
                    name="billGates"
                />
                <StoriesContent
                    image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
                    name="elonmusk"
                />
                <StoriesContent
                    image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
                    name="jeffbezos"
                />
                <StoriesContent
                    image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
                    name="stevejobs"
                />
                <StoriesContent
                    image="https://pbs.twimg.com/profile_images/935325968280907776/AcBo6zJc.jpg"
                    name="jeffdean123"
                />
                <StoriesContent
                    image="https://www.bafta.org/sites/default/files/styles/news_main/public/externals/69827f740e5eb76041a52b02ee7cb1da.jpg?itok=YEy3DXak"
                    name="johncarmack"
                />


            </div>

            <div className="posts__content">
                <PostsContent
                    avatarImage="https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2"
                    username="markzuckerberg"
                    Icon={MoreHorizIcon}
                    image="https://cdn.britannica.com/54/187354-050-BE0530AF/Mark-Zuckerberg.jpg"
                    likes="lebronjames23"
                    timestamp="2 HOURS AGO"
                />

            </div>
            <div className="posts__content">
                <PostsContent
                    avatarImage="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg"
                    username="billgates"
                    Icon={MoreHorizIcon}
                    image="https://image.cnbcfm.com/api/v1/image/104970927-9I9B0050.JPG?v=1517416095"
                    likes="garyvee"
                    timestamp="2 HOURS AGO"
                />
            </div>
            <div className="posts__content">
                <PostsContent
                    avatarImage="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
                    username="jeffbezos"
                    Icon={MoreHorizIcon}
                    image="https://i.pinimg.com/originals/18/07/af/1807afc49b8b4ec68de22695c8d8cbbc.jpg"
                    likes="jackma"
                    timestamp="2 HOURS AGO"
                />
            </div>
            <div className="posts__content">
                <PostsContent
                    avatarImage="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
                    username="elonmusk"
                    Icon={MoreHorizIcon}
                    image="https://c.files.bbci.co.uk/13F8F/production/_115970818_hi064603139.jpg"
                    likes="billgates"
                    timestamp="2 HOURS AGO"
                />
            </div>
        </div>
    )
}

export default Stories;
