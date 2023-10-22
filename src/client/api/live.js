import axios from 'axios';
import { response } from 'express';

const baseurl = 'https://api.one-stage.kkstream.io'
const org_id = "3d21e576-e82d-4f28-96e4-734ae68c4b9e";
const ApiToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjJmOTQ4Y2YzLWI0MGItNDk5Yi04Y2ZmLTk2OGMzMWE5NjA1MiIsImp0aSI6ImM2ZDczMDU5LTQ2YTItNDYzMS1hNTRmLTY1OWIxNDI2MzE5OCIsInRva2VuX3VzZSI6ImFwaV9hY2Nlc3MiLCJlbWFpbCI6Im1pa2U5MTEyMDlAZ21haWwuY29tIn0.rHI50DEtH8GPbOjEpqrHDhfsOz_XNi_YyJoM5CSryEoJ1j3IqG2yDc9JXi-FkI94ksTz8TyLyhJO4_FZpwp-sH3pwG33t0MTZguxEx1u0xZQUrLzF46ZdxagY39OWc9PKbJ6LH6enXehCTaak1EM-u0JD0XgojPz8sAIo1JdX7YyOuHdRtO48xgumdjwbPnycVLIJ38nSfvZZNYRrihYOFWnhkRJN7HPO1-T9v1CzS677ICtbzaXP7wsetS9DtD_8m02JR8vY4_PUyqu9ImPqVRBokv5ChGQY8qn-nFOskmrfA84vOZCazLpGsQpqKeSZw3jbHo3UbQUq0rOt2uJOBGOAgYuFF1CJLO1sS2K9jR74l90-qFTXdnPqb-T_49nTcl6IcaVidwkGrl1GYnJ7Eq2fVW6e5q51U4AodPzsxVrbAo70yFp7kAjSpbCZMdxXleJaOMUx5TLe0r3oXvCs1Cu7GHcszKJzUGkN1e7Np5JxMs1eO4xM34tDHpqtrpYTPRYfXfPBeb9XUU34mbEKTk2HaykRbK_p9i6Q2zhWOO1yni2VtWh1t3hiSK0fee1GXN1UHeQHyrD2ZJSwLPtTlu2KKRhVIFz8DexNnfqrElhgk_Qg0WJIeHyKPAIbGX6PPZcfa47l1yMbU8hvPvu44gBTK2uJMJLY_vn1yTAkso";

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

// return live id
export async function CreateLive() {
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

    return await axios(options).then(response => {
        console.log(JSON.stringify(response.data));
        return response.data["live"]["id"];
    });
}

// return url and stream_key
export async function GetLive(id) {
    const options = {
        method: 'GET',
        url: `${baseurl}/bv/cms/v1/lives/${id}`,
        headers: {
            'x-bv-org-id': org_id,
            'Accept': 'application/json',
            'authorization': `Bearer ${ApiToken}`
        }
    };

    return await axios(options).then(response => {
        console.log(JSON.stringify(response.data));
        return {
            "url": response.data["live"]["setup"]["rtmp"]["links"][0]["url"],
            "stream_key": response.data["live"]["setup"]["rtmp"]["links"][0]["stream_key"]
        }
    });
}

export async function PreviewLive(id) {
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

    return await axios(options).then(response => {
        console.log(JSON.stringify(response.data));
    });
}

export async function StartLive(id) {
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

    return await axios(options).then(response => {
        console.log(JSON.stringify(response.data));
    });
}