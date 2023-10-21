import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import { creatEvent } from '../api/chatroom';
import {SendMessage as SendMessageFromApi }from '../api/chatroom';

async function SendMessage(user, message, date) {

    return SendMessageFromApi(message);

}

const ChatRoom = () => {
    SendMessage("me", "fox", "2023");
    return (
        <div>
            hello
        </div>
    )

}

export default ChatRoom;