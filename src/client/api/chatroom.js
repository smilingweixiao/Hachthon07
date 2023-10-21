// const targetWords = ["ghast","fox","Sathan"];
// const description = "Mr.Burns entered to the hall.";
// let isInclude = targetWords.some(word => description.includes(word));

// console.log(isInclude);

import { v4 as uuid } from 'uuid';
import axios from 'axios';

const mcurl = '192.168.105.191';
const baseurl = 'https://api.one-stage.kkstream.io';
const id = "91e99b19-4516-4cff-bfa1-dcb460f86e47";
const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjJmOTQ4Y2YzLWI0MGItNDk5Yi04Y2ZmLTk2OGMzMWE5NjA1MiIsImV4cCI6MTY5Nzg3Nzk0OCwiaWF0IjoxNjk3ODc0MzQ4LCJqdGkiOiJkMzExZDQ1Ny0zYTZiLTQzNGYtYWY4My1lNjlkMzc3ZWMwNGMiLCJ0b2tlbl91c2UiOiJsb2dpbl9hY2Nlc3MiLCJvcmlnaW5fanRpIjoiZmUzZGFmMDYtZDJlMC00NzU5LWI3ZmYtMmI0OWY3YzNiMWQxIiwiZW1haWwiOiJtaWtlOTExMjA5QGdtYWlsLmNvbSIsIm9yZ19pZCI6IjNkMjFlNTc2LWU4MmQtNGYyOC05NmU0LTczNGFlNjhjNGI5ZSIsInJvbGVfdHlwZSI6IlJPTEVfVFlQRV9BRE1JTiJ9.S2r1e7kPXtF4lbxm2kU3okh2CsPiBZiVmnAGB0VPuq9MIlPiFDQxzGOx6gqeVtJlgOMxypyJtTpuZb0TyR16oh5I963sSTOWUZrfuiPdF6k3yY9BGmWtz3LU01NfDlRfIfH39ItSguEOI-G8FwPUIXwt0-sro55fT9pRe2TvybRvN0jLurjHcuRS2xExcAHB5rWNagSZ-exTbero55NamTY_bzg9EEYAYH_5MqUypT2qnxLXx2g9tgDCmqX3NOid9YMkEdvDKfVdz-GP9AWQnLLE4NqHA90gQKuqt7gQaLik3UOQRsJEDpwowR6aXq3rgKfp_hsmZwNBRAOvCCqE4X1zB0DHqoU8mM0yNaJlfSYuAzYxKQw-u6EQktNvRKothdQSEMOyARALl01MyGcnIjIIAum6BK-v7t9zlBkzYnZR8HrtwL8bk76gdH0e8qCx62R6erY5bEedaabtOsUCAktYcRQEYDWgVNq_IeapiPjht333gOMU47QdhPJkOcAcZuCguJ3QCgfb_t9QxiAmnp4UVRHbBADCCr-druGjMUOiMfkmy5AurPGYDU0ZSAnqLOrwX9BrDHUNThpiexJpnpihsrJ7mgC9mxucFOPcuwD87qVIbNe7G0EvxrNzkGJ75-hbUXolk3J5kLOY6HqNvUIyVl1HFl2LY5Vk1lIjc0E"
const ChatroomToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJiZDgxNTQ0LTBhZmItNGIxNC05ZGQxLWNlNzEwM2E4ZWQ2NCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb20ua2tjb21wYW55Lm1lZGlhLnBsYXRmb3JtLmNoYXQiLCJzdWIiOiJndWVzdC1hMWRjZDRjYy0xNDA4LTQzNmItYTU4My0wMTVjM2YzNmQ4NDgiLCJleHAiOjE2OTc5NTkxNzAsImlhdCI6MTY5Nzg3Mjc3MCwianRpIjoiYjVmYjBjYzQtMTZmNi00NDQzLTkxZmMtZWFlZWUxZmU0M2YwIiwidGVuYW50X2lkIjoiOWJlMDdiMTAtYWZjMi00NmZlLWE2M2EtNzY5ZmMyYWU4MjQ0IiwidHlwZSI6ImNoYXQiLCJjaGF0X2lkIjoiOTFlOTliMTktNDUxNi00Y2ZmLWJmYTEtZGNiNDYwZjg2ZTQ3IiwiZGV2aWNlX2lkIjoiNjNlYTJlZmMtOGNiNy00NGRhLTllOTMtNjMyY2I2OTMwZmMxIiwicm9sZXMiOlsidmlld2VyIl0sInBvbGljaWVzIjpbeyJ0IjoiYmkiLCJyIjoia2tzX3BsYXRmb3JtX2NoYXRfc3RhZ2UifSx7InQiOiJzIn1dfQ.kO40gDEDfwnMi3-GrBIFcUpGkVE3_D8oxGyyj0QeMh51shBmdu2ev0f-JjMJ8NResKjPxD9F-TM79kdbDHs2fcX22JANzFBqRA0sNA640zU69ZlbcRsPDEK0mx58XS14aZ1KUIRIlI_q6dEkzI4gS-fNPSdU2QarU4sTERsT4Ndo6N4Xwuqio5l8fHPJDz5sik8qVRyX3kulVVy-SovzTd6MIWaqzFgxzHA-MfGwmqziZC4O6ZgdTPp3J1lEE97CVHE3mdUa6dDB8V8Sh08-TOU8EH98ogc5lNW-xid5_XveKoAHFTEH0jdwkHJU12vbFFXdGvpXjKfHx3NkEhUKBw";
const url = `${baseurl}/bv/chatroom/v1/chatrooms`;

const options = {
    method: 'POST',
    url: url,
    headers: {
      'authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {}
  };

export function getWeather() {
    // let url = `${baseurl}&q=${encodeURIComponent(city)}&units=${unit}`;

    console.log(`Making request to: ${baseurl}`);

    return axios(options).then(
        response => {
            console.log(JSON.stringify(response.data));
        }
    ).catch(error => {
        console.log(error);
    });
}

// const pageToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjJmOTQ4Y2YzLWI0MGItNDk5Yi04Y2ZmLTk2OGMzMWE5NjA1MiIsImV4cCI6MTY5Nzg3Nzk0OCwiaWF0IjoxNjk3ODc0MzQ4LCJqdGkiOiJkMzExZDQ1Ny0zYTZiLTQzNGYtYWY4My1lNjlkMzc3ZWMwNGMiLCJ0b2tlbl91c2UiOiJsb2dpbl9hY2Nlc3MiLCJvcmlnaW5fanRpIjoiZmUzZGFmMDYtZDJlMC00NzU5LWI3ZmYtMmI0OWY3YzNiMWQxIiwiZW1haWwiOiJtaWtlOTExMjA5QGdtYWlsLmNvbSIsIm9yZ19pZCI6IjNkMjFlNTc2LWU4MmQtNGYyOC05NmU0LTczNGFlNjhjNGI5ZSIsInJvbGVfdHlwZSI6IlJPTEVfVFlQRV9BRE1JTiJ9.S2r1e7kPXtF4lbxm2kU3okh2CsPiBZiVmnAGB0VPuq9MIlPiFDQxzGOx6gqeVtJlgOMxypyJtTpuZb0TyR16oh5I963sSTOWUZrfuiPdF6k3yY9BGmWtz3LU01NfDlRfIfH39ItSguEOI-G8FwPUIXwt0-sro55fT9pRe2TvybRvN0jLurjHcuRS2xExcAHB5rWNagSZ-exTbero55NamTY_bzg9EEYAYH_5MqUypT2qnxLXx2g9tgDCmqX3NOid9YMkEdvDKfVdz-GP9AWQnLLE4NqHA90gQKuqt7gQaLik3UOQRsJEDpwowR6aXq3rgKfp_hsmZwNBRAOvCCqE4X1zB0DHqoU8mM0yNaJlfSYuAzYxKQw-u6EQktNvRKothdQSEMOyARALl01MyGcnIjIIAum6BK-v7t9zlBkzYnZR8HrtwL8bk76gdH0e8qCx62R6erY5bEedaabtOsUCAktYcRQEYDWgVNq_IeapiPjht333gOMU47QdhPJkOcAcZuCguJ3QCgfb_t9QxiAmnp4UVRHbBADCCr-druGjMUOiMfkmy5AurPGYDU0ZSAnqLOrwX9BrDHUNThpiexJpnpihsrJ7mgC9mxucFOPcuwD87qVIbNe7G0EvxrNzkGJ75-hbUXolk3J5kLOY6HqNvUIyVl1HFl2LY5Vk1lIjc0E"

const options_1 = {
    method: 'GET',
    url: url,
    headers: {
      'authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    },
};

export async function getMessage() {
    // let url = `${baseurl}&q=${encodeURIComponent(city)}&units=${unit}`;

    console.log(`Making request to get all msgs`);

    return axios(options).then(
        response => {
            console.log(JSON.stringify(response.data));
            console.log('finish printing result');
        }
    ).catch(error => {
        console.log(error);
    });
}    

export async function creatEvent(user, message, date) {
    console.log(user, message, date)
    return await server_createEvent(user, message, date);
}

async function server_createEvent(user, message, date) {
    const newEvent = {
        id: uuid(),
        user: user,
        message: message,
        date: date
    };

    let result = await fetch(`${mcurl}/api/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    });

    console.log('sent', result);
    return newEvent;
}