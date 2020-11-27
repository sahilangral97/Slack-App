import React from 'react';
import "./Messages.css";

function Messages({user, userimage, timestamp, message}) {
    
    return (
        <div className="messages">
            <img src={userimage} alt="userImage"/>
           <div className="message_info">
                <h4>{user} <span className="message_time">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
           </div>
        </div>
    )
}

export default Messages
