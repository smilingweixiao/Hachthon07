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
    });
  })

  return (
    <div>
      <iframe src="https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjY1ZmJhYmE3LTUyMjAtNDYxMS1hMDUyLTIxMGExYjFkZjAyYyIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX0xJVkVfRVZFTlQifQ.moNqZwo-FP3PfZOhKzwV8PtXFpMka4xPgFn8v-x7_OknHYuDu4vBUdEp3PRbSpIp0sKzhiSCJOoubgNdJmTj57cLMJLJFRcoJNlvyOAWbdWdKG3L07g1b0kGGkUN0FDQUDe8n3dSAJzOQmlRE6gIA1VU3xjZ4NoIxh90J06EcMrnm2iioWr50AZtZksylfra_pYVEl7uzC6Z-93u3Hyy5d4Oyhe_pXKUx--8b-VRWZk07GkrDtKZSV2u_2N6wU1295fdmj0W-yj2oJytmnsYA0CfQLoV9pXU2tdXAnB545HmrswUQ4anhyutAxOwIdz7Le2UMcLUjBYjGfg4gjYMtI8iSYXdJ7rF50bC3DJ9ge6LH2o8-L2TgRJFCXftlNkHlPKrSHLuyf8AV5p9-0Dr1Ltn8RfRVWVss-Uv8zWMt7j_HOCCuKSrmax_TOuey6_YrwbS_NFR-E7iAwONkcmOPK5A9yfPLM_XOUSxkEDU1veZUwS9-vhUogOouYIv-hG9T-Z-GSNukbuIPknj0WRj2Pw-_H1B6jbcL02kW7WWLHXpUANRJwmiFs1lsDEIdrNcQUd_GjUQyPaEWvqJcqVU1BSjqB5RX1r74PK2WSh500SjOPsc06zWpm903iROJsHM48kduJ0AsofFfFRJEq2kggwtnitHmD2t-wwUV2sgpWs" 
      width="1200" 
      height="500" 
      allow="autoplay; encrypted-media; clipboard-write" 
      frameborder="0" 
      allowfullscreen></iframe>
      <div>
        <button onClick={handleSendMessage}>Sen Message</button>
        <button onClick={handleCleanMessage}>Clean Message</button>
      </div>
      <ul>
        {posts.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;