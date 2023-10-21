import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { response } from 'express';

const mcurl = 'http://localhost:3000';
const baseurl = 'https://api.one-stage.kkstream.io';
const id = "91e99b19-4516-4cff-bfa1-dcb460f86e47";
const org_id = '3d21e576-e82d-4f28-96e4-734ae68c4b9e';
const ApiToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjJmOTQ4Y2YzLWI0MGItNDk5Yi04Y2ZmLTk2OGMzMWE5NjA1MiIsImp0aSI6ImM2ZDczMDU5LTQ2YTItNDYzMS1hNTRmLTY1OWIxNDI2MzE5OCIsInRva2VuX3VzZSI6ImFwaV9hY2Nlc3MiLCJlbWFpbCI6Im1pa2U5MTEyMDlAZ21haWwuY29tIn0.rHI50DEtH8GPbOjEpqrHDhfsOz_XNi_YyJoM5CSryEoJ1j3IqG2yDc9JXi-FkI94ksTz8TyLyhJO4_FZpwp-sH3pwG33t0MTZguxEx1u0xZQUrLzF46ZdxagY39OWc9PKbJ6LH6enXehCTaak1EM-u0JD0XgojPz8sAIo1JdX7YyOuHdRtO48xgumdjwbPnycVLIJ38nSfvZZNYRrihYOFWnhkRJN7HPO1-T9v1CzS677ICtbzaXP7wsetS9DtD_8m02JR8vY4_PUyqu9ImPqVRBokv5ChGQY8qn-nFOskmrfA84vOZCazLpGsQpqKeSZw3jbHo3UbQUq0rOt2uJOBGOAgYuFF1CJLO1sS2K9jR74l90-qFTXdnPqb-T_49nTcl6IcaVidwkGrl1GYnJ7Eq2fVW6e5q51U4AodPzsxVrbAo70yFp7kAjSpbCZMdxXleJaOMUx5TLe0r3oXvCs1Cu7GHcszKJzUGkN1e7Np5JxMs1eO4xM34tDHpqtrpYTPRYfXfPBeb9XUU34mbEKTk2HaykRbK_p9i6Q2zhWOO1yni2VtWh1t3hiSK0fee1GXN1UHeQHyrD2ZJSwLPtTlu2KKRhVIFz8DexNnfqrElhgk_Qg0WJIeHyKPAIbGX6PPZcfa47l1yMbU8hvPvu44gBTK2uJMJLY_vn1yTAkso';
const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjJmOTQ4Y2YzLWI0MGItNDk5Yi04Y2ZmLTk2OGMzMWE5NjA1MiIsImV4cCI6MTY5Nzg3Nzk0OCwiaWF0IjoxNjk3ODc0MzQ4LCJqdGkiOiJkMzExZDQ1Ny0zYTZiLTQzNGYtYWY4My1lNjlkMzc3ZWMwNGMiLCJ0b2tlbl91c2UiOiJsb2dpbl9hY2Nlc3MiLCJvcmlnaW5fanRpIjoiZmUzZGFmMDYtZDJlMC00NzU5LWI3ZmYtMmI0OWY3YzNiMWQxIiwiZW1haWwiOiJtaWtlOTExMjA5QGdtYWlsLmNvbSIsIm9yZ19pZCI6IjNkMjFlNTc2LWU4MmQtNGYyOC05NmU0LTczNGFlNjhjNGI5ZSIsInJvbGVfdHlwZSI6IlJPTEVfVFlQRV9BRE1JTiJ9.S2r1e7kPXtF4lbxm2kU3okh2CsPiBZiVmnAGB0VPuq9MIlPiFDQxzGOx6gqeVtJlgOMxypyJtTpuZb0TyR16oh5I963sSTOWUZrfuiPdF6k3yY9BGmWtz3LU01NfDlRfIfH39ItSguEOI-G8FwPUIXwt0-sro55fT9pRe2TvybRvN0jLurjHcuRS2xExcAHB5rWNagSZ-exTbero55NamTY_bzg9EEYAYH_5MqUypT2qnxLXx2g9tgDCmqX3NOid9YMkEdvDKfVdz-GP9AWQnLLE4NqHA90gQKuqt7gQaLik3UOQRsJEDpwowR6aXq3rgKfp_hsmZwNBRAOvCCqE4X1zB0DHqoU8mM0yNaJlfSYuAzYxKQw-u6EQktNvRKothdQSEMOyARALl01MyGcnIjIIAum6BK-v7t9zlBkzYnZR8HrtwL8bk76gdH0e8qCx62R6erY5bEedaabtOsUCAktYcRQEYDWgVNq_IeapiPjht333gOMU47QdhPJkOcAcZuCguJ3QCgfb_t9QxiAmnp4UVRHbBADCCr-druGjMUOiMfkmy5AurPGYDU0ZSAnqLOrwX9BrDHUNThpiexJpnpihsrJ7mgC9mxucFOPcuwD87qVIbNe7G0EvxrNzkGJ75-hbUXolk3J5kLOY6HqNvUIyVl1HFl2LY5Vk1lIjc0E"
const ChatroomToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJiZDgxNTQ0LTBhZmItNGIxNC05ZGQxLWNlNzEwM2E4ZWQ2NCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb20ua2tjb21wYW55Lm1lZGlhLnBsYXRmb3JtLmNoYXQiLCJzdWIiOiJndWVzdC1hMWRjZDRjYy0xNDA4LTQzNmItYTU4My0wMTVjM2YzNmQ4NDgiLCJleHAiOjE2OTc5NTkxNzAsImlhdCI6MTY5Nzg3Mjc3MCwianRpIjoiYjVmYjBjYzQtMTZmNi00NDQzLTkxZmMtZWFlZWUxZmU0M2YwIiwidGVuYW50X2lkIjoiOWJlMDdiMTAtYWZjMi00NmZlLWE2M2EtNzY5ZmMyYWU4MjQ0IiwidHlwZSI6ImNoYXQiLCJjaGF0X2lkIjoiOTFlOTliMTktNDUxNi00Y2ZmLWJmYTEtZGNiNDYwZjg2ZTQ3IiwiZGV2aWNlX2lkIjoiNjNlYTJlZmMtOGNiNy00NGRhLTllOTMtNjMyY2I2OTMwZmMxIiwicm9sZXMiOlsidmlld2VyIl0sInBvbGljaWVzIjpbeyJ0IjoiYmkiLCJyIjoia2tzX3BsYXRmb3JtX2NoYXRfc3RhZ2UifSx7InQiOiJzIn1dfQ.kO40gDEDfwnMi3-GrBIFcUpGkVE3_D8oxGyyj0QeMh51shBmdu2ev0f-JjMJ8NResKjPxD9F-TM79kdbDHs2fcX22JANzFBqRA0sNA640zU69ZlbcRsPDEK0mx58XS14aZ1KUIRIlI_q6dEkzI4gS-fNPSdU2QarU4sTERsT4Ndo6N4Xwuqio5l8fHPJDz5sik8qVRyX3kulVVy-SovzTd6MIWaqzFgxzHA-MfGwmqziZC4O6ZgdTPp3J1lEE97CVHE3mdUa6dDB8V8Sh08-TOU8EH98ogc5lNW-xid5_XveKoAHFTEH0jdwkHJU12vbFFXdGvpXjKfHx3NkEhUKBw";
const url = `${baseurl}/bv/chatroom/v1/chatrooms`;
const getMag_url = `${baseurl}/bv/chatroom/v1/chatrooms/dictionaries`;
const genMag_url = `${baseurl}/bv/chatroom/v1/chatrooms/dictionaries/id/patterns`;

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

export function LiveStreaming() {
    var url, stream_key;
    const id = CreateLive();
    ({ url, stream_key } = GetLive(id));
    PreviewLive(id);
    return {
        "id": id,
        "url": url,
        "stream_key": stream_key
    };
}

export function CreateLive() {
    const options = {
        method: 'POST',
        url: `${baseurl}/bv/cms/v1/lives`,
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': `Bearer ${ApiToken}`,
        'x-bv-org-id': org_id
        },
        data: {
        live: {
            "name": "Mike's live",
            "type": 'LIVE_TYPE_LIVE',
            "broadcast_mode": 'BROADCAST_MODE_TRADITIONAL_LIVE',
            "resolution": 'LIVE_RESOLUTION_HD',
            "security": {
                "privacy": {
                    "type": 'SECURITY_PRIVACY_TYPE_PUBLIC'
                }
            },
            "interaction": {
                "poll_enabled": true,
                "chatroom": {
                    "live": {
                        "enabled": true,
                        "theme": 'CHATROOM_THEME_DARK'
                    },
                    "vod": {
                        "enabled": false
                    }
                }
            },
            "metadata": {
                "short_description": 'short',
                "long_description": 'formal',
                "labels": []
            },
            "ingest_types": ['LIVE_STREAM_INGEST_TYPE_RTMP'],
            "player_setting": {
            }
        }
        }
    };

    return axios(options).then(response => {
        return response.data["live"]["id"];
    });
}

export function GetLive(id) {
    const options = {
        method: 'GET',
        url: `${baseurl}/bv/cms/v1/lives/${id}`,
        headers: {
            'x-bv-org-id': org_id,
            'Accept': 'application/json',
            'authorization': `Bearer ${ApiToken}`
        }
    };

    return axios(options).then(response => {
        return {
            "url": response.data["live"]["setup"]["rtmp"]["links"][0]["url"],
            "stream_key": response.data["live"]["setup"]["rtmp"]["links"][0]["stream_key"]
        }
    });
}

export function PreviewLive(id) {
    const options = {
        method: 'POST',
        url: `${baseurl}/bv/cms/v1/lives/${id}:preview`,
        headers: {
          'x-bv-org-id': org_id,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': `Bearer ${ApiToken}`
        },
        data: {}
    };

    return axios(options);
}

export function StartLive(id) {
    const options = {
        method: 'POST',
        url: `${baseurl}/bv/cms/v1/lives/${id}:start`,
        headers: {
          'x-bv-org-id': org_id,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          authorization: `Bearer ${ApiToken}`
        },
        data: {}
    };

    return axios(options);
}

// const pageToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjJmOTQ4Y2YzLWI0MGItNDk5Yi04Y2ZmLTk2OGMzMWE5NjA1MiIsImV4cCI6MTY5Nzg3Nzk0OCwiaWF0IjoxNjk3ODc0MzQ4LCJqdGkiOiJkMzExZDQ1Ny0zYTZiLTQzNGYtYWY4My1lNjlkMzc3ZWMwNGMiLCJ0b2tlbl91c2UiOiJsb2dpbl9hY2Nlc3MiLCJvcmlnaW5fanRpIjoiZmUzZGFmMDYtZDJlMC00NzU5LWI3ZmYtMmI0OWY3YzNiMWQxIiwiZW1haWwiOiJtaWtlOTExMjA5QGdtYWlsLmNvbSIsIm9yZ19pZCI6IjNkMjFlNTc2LWU4MmQtNGYyOC05NmU0LTczNGFlNjhjNGI5ZSIsInJvbGVfdHlwZSI6IlJPTEVfVFlQRV9BRE1JTiJ9.S2r1e7kPXtF4lbxm2kU3okh2CsPiBZiVmnAGB0VPuq9MIlPiFDQxzGOx6gqeVtJlgOMxypyJtTpuZb0TyR16oh5I963sSTOWUZrfuiPdF6k3yY9BGmWtz3LU01NfDlRfIfH39ItSguEOI-G8FwPUIXwt0-sro55fT9pRe2TvybRvN0jLurjHcuRS2xExcAHB5rWNagSZ-exTbero55NamTY_bzg9EEYAYH_5MqUypT2qnxLXx2g9tgDCmqX3NOid9YMkEdvDKfVdz-GP9AWQnLLE4NqHA90gQKuqt7gQaLik3UOQRsJEDpwowR6aXq3rgKfp_hsmZwNBRAOvCCqE4X1zB0DHqoU8mM0yNaJlfSYuAzYxKQw-u6EQktNvRKothdQSEMOyARALl01MyGcnIjIIAum6BK-v7t9zlBkzYnZR8HrtwL8bk76gdH0e8qCx62R6erY5bEedaabtOsUCAktYcRQEYDWgVNq_IeapiPjht333gOMU47QdhPJkOcAcZuCguJ3QCgfb_t9QxiAmnp4UVRHbBADCCr-druGjMUOiMfkmy5AurPGYDU0ZSAnqLOrwX9BrDHUNThpiexJpnpihsrJ7mgC9mxucFOPcuwD87qVIbNe7G0EvxrNzkGJ75-hbUXolk3J5kLOY6HqNvUIyVl1HFl2LY5Vk1lIjc0E"

const getMsg_option = {
    method: 'GET',
    url: getMag_url,
    headers: {
      'authorization': `Bearer ${ChatroomToken}`,
      'Accept': 'application/json'
    },
};

export async function getMessage() {
    console.log(`Making request to get all msgs`);

    return axios(getMsg_option).then(
        response => {
            console.log(JSON.stringify(response.data));
            console.log('finish printing result');
        }
    ).catch(error => {
        console.log(error);
    });
}    

const genmsg_option = {
    method: 'POST',
    url: getMag_url,
    // url: genMag_url,
    headers: {
      'authorization': `Bearer ${ChatroomToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: {name: 'string', description: 'string'}
};

export async function geneateMessage() {
    // let url = `${baseurl}&q=${encodeURIComponent(city)}&units=${unit}`;

    console.log(`generating message`);

    return axios(genmsg_option).then(
        response => {
            console.log(JSON.stringify(response.data));
            console.log('finish creating result');
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

    const options = {
        method: 'POST',
        url: mcurl,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    }

    //let result = await fetch(`${mcurl}/api/message`, {
    //    method: 'POST',
    //    headers: {
    //        'Content-Type': 'application/json'
    //    },
    //    body: JSON.stringify(newEvent)
    //});

    console.log(`Making request to: ${mcurl}`);

    return axios(options).then(
        response => {
            console.log(JSON.stringify(response.data));
        }
    ).catch(error => {
        console.log(error);
    });

}