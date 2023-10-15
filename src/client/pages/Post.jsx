import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";

import { addMessage, cleanMessage } from '../store/posts/actions';


const Post = () => {
  const [user, authStatus] = useOutletContext();
  const posts = useSelector((state) => state.post.messages);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    const newMessage = 'New message'; // 在實際應用中，這裡可以根據實際需求獲取使用者輸入等
    dispatch(addMessage(newMessage));
  };

  const handleCleanMessage = () => {
    dispatch(cleanMessage());
  };

  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  });

  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.data.command === 'ping') {
        Array.from(document.querySelectorAll('iframe')).forEach(iframe => 
          iframe?.contentWindow?.postMessage({ command: 'pong' }, '*')
        );
      }
    })
  });

  return (
    <div>
      <h1>Welcome to the React App!</h1>
      <p>This is a simple chat room web app.</p>
      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={handleCleanMessage}>Clean Message</button>
      <iframe src="https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjE1NzYzMDIzLWIyZWUtNDNjMS04YTI3LWM2NThlZjBlN2NiMSIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.Bu1JZPftJy0pGTgWzh_g3gG7Xsypb03SwCaT5TzLXn9mcWDudBO_8W8bPrQvNvgvp2PbEu06wCupiNiDp1r-xGO_sat93hUQTzvCtgV4ndDm7fFxW32hYDckfGnZzLsHOHgA55Vxzv80fakshgEP48zxsMsLigkTI9gVSX-SrPL0ZSaqzqGlt3vlSVQezjcg_lglctk0bcjeClW2L3jrwj2GS3IQWwBkTecjTRLp47O6k2Ze7JJRGaMIIvFbbXLxyFWyjcTEMkkM4TtRAKppEhWoiZDbn8KnWLA2OrShGw415yXz-yP36EvpWCV6U6efSAT8Wvp5rMcbK7WuzvzjR4Qat9HJ8Ss1C86W9nTlY1jw2muTbwzOwvgZHZ7rgBHAz46ZMIqhDjgMhygTSt_i6erqhi-F-b7ZjpywqWK3l8Bpjf_xamAFTBr_HN48e8toQW7x_iR2SxlitS5_ohG-sOtMldMUhCEcPYEmKGzacpmaMUHenjkGfnNhVhgacmtjU-EgnFumqZE0TUycd6QMTNHlMEqqrR3kEo1UDFBw6Sx2Hk7CPtGauhTDjlaiUaYxyLnwlYpSdVF5EJ0XfQugFcW5KkGEIdmh-HT0QPl6lKl3HunDPX17SWk9E4bqsGnss8iuwV4FMWGs96bpzCKFQ33PNBaDomkRGeTCNIE8r8c"
        width="640"
        height="360"
        allow="autoplay; encrypted-media; clipboard-write"
        frameborder="0"
        allowfullscreen>
      </iframe>
      <ul>
        {posts.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;