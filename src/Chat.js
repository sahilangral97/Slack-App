import React, {useEffect, useState} from 'react';
import "./Chat.css";
import {useParams} from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "./firebase"
import Messages from "./Messages"
import ChatInput from "./ChatInput"

function Chat() {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [messages, setMessages] = useState([]); 

    useEffect(() => {
        if(roomId){
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => (
                setRoomDetails(snapshot.data())
           ))

           db.collection("rooms")
           .doc(roomId)
           .collection("messages")
           .orderBy('timestamp','asc')
           .onSnapshot((snapshot) => (
               setMessages(
                   snapshot.docs.map((doc) => doc.data())
               )
           ))
        }


    }, [roomId])



    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="channel_name">#{roomDetails?.name}</h4>
                    <StarBorderIcon />
                </div>
                <div className="chat_headerRight">
                    <InfoOutlinedIcon />
                    <p>Details</p>
                </div>
            </div>
            <div className="chat_messages">
                {
                    messages?.map(({user,userimage,timestamp,message}) => (
                        <Messages   user={user}
                            userimage={userimage}
                            timestamp={timestamp}
                            message={message}
                        />
                    ))
                }
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat
