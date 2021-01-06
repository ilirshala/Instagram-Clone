import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Direct.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import DirectMessages from './DirectMessages';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Direct() {

    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);


    const sendMessage = () =>{
        const username = prompt("Please enter name for chat");
        
        alert( 'connection lost come back later to chat with your friends');
    }
    return (
        <div className="direct">
            <div className="direct__leftcontent">
                <div className="username">
                    <h4>ilirshala7</h4>
                    <ExpandMoreIcon />

                </div>
                <div className="write">
                    <RateReviewOutlinedIcon />
                </div>
                <hr className="horizontalRow1" />

                <div className="primaryMessages">
                    <div className="h1">
                        <h4>Primary</h4>

                    </div>
                    <div className="h2">
                        <h4>General</h4>
                    </div>
                    <div className="h3">
                        <h4>Requests(0)</h4>
                    </div>
                </div>
                <hr />
                {/* <hr className="horizontalRow"/> */}


                <div className="messages">
                    <DirectMessages
                        avatarImage={seed}
                        username="ilirshala7"
                        message="Hello"
                        timestamp="1h"
                    />
                    <DirectMessages
                        avatarImage={seed}
                        username="billgates"
                        message="How are you today?"
                        timestamp="5h"
                    />
                    <DirectMessages
                        avatarImage={seed}
                        username="markzuckerberg"
                        message="Hi,I'm waiting for you"
                        timestamp="2h"
                    />
                    <DirectMessages
                        avatarImage={seed}
                        username="jackmaa"
                        message="I failed 99 times in my life"
                        timestamp="8h"
                    />
                    <DirectMessages
                        avatarImage={seed}
                        username="elonmusk"
                        message="New Tesla is comming"
                        timestamp="3h"
                    />
                    <DirectMessages
                        avatarImage={seed}
                        username="jeffbezos"
                        message="Google is like a mountain"
                        timestamp="3 minutes"
                    />
                    <DirectMessages
                        avatarImage={seed}
                        username="lebronjames"
                        message="I'm the king of NBA"
                        timestamp="3h"
                    />
                    <DirectMessages
                        avatarImage={seed}
                        username="Unknown"
                        message="Practise is the key of success"
                        timestamp="3h"
                    />
                </div>
            </div>


            <div className="direct__rightcontent">
                <div className="container">
                    <div className="icon">
                        <SendOutlinedIcon />
                    </div>
                    <div className="title">
                        <h3>Your Messages</h3>
                    </div>
                    <div className="subtitle">
                        <p>Send private photos and messages to a friend or group.</p>
                    </div>
                    <div className="button">
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Direct;
