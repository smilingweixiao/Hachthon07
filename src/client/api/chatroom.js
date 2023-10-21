import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

//判斷是否有敏感字眼 -> 在component就要完成
//if yse: 判斷問題種類
//switch case: 丟到server

const base_url = "";

export async function createEvent(user, message, date) {
    return await server_createEvent(user, message, date)
}

async function server_createEvent(user, message, date) {
    
    which_id = _tellMessage(message);

    newEvent = {
        user: user,         //string
        message: message,   //string
        date: date,         //string
        id: 0               //int
    };

    let res = await fetch('/api/message', {
        method: 'GET',
        headers: {
            'user': user
        },
        body: JSON.stringify(newEvent)
    })

    let UnorderEvents = await res.json();
    console.log(UnorderEvents)
    if(!UnorderEvents || !date){
        console.log(UnorderEvents, date)
        return [[],[],[],[],[],[],[]]
    }
    return filterSort(UnorderEvents, filter, date);


}



