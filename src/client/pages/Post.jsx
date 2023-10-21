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
      <iframe src="https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6ImMyZmZkM2U2LWMwYmYtNGMyZi1hOGU1LWU2MjgzY2IwMjk5NCIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX0xJVkVfRVZFTlQifQ.aI9DdBikEi8H_06CRNNwc_248X5ECgclFjD_dRwdHkk8TSGJoMhG7RRTy1EmIV7qnPFszyE8K4Jxw2ygCMCiHCBiPnXdQ8G1ex2CWbMkYH6zGn60vf4jJI55KQah2wIFRTLFT2zPwW1HrMMHX_AqrIpsKgJKlM0jN9RFulUDhVQKbArAVxFctFgQOvhl2Ey5Exr_uoYwtmfoO-UsnyUo4OQ02ztgdYhd-OzuV_FgbxUB-A84b7DxTVVKvFj234Vq4PKJ59GcLNI2UNIwQ4OrqBcg7kQMYVAnJ55txHuirxGtOLXDC_Nw749EQUvwLyG9zgTyyXQShY_Hq2dzQmfqwMcl7bcWD_KjKEUAXP5VWQo9AoDNL3N7JROUpF_IbSdaiFAUajXEAbx8XGd8c67FLm17K-baOrM9Nep7_FvW3MoGkLVoUTNjDUCezwpZOu2ANe21iYvKNvpsQubkdpmUWjSGoNp34RICRoQ8m9s1yPy1T67amlNrkXWja6c-gJMSzxjLjDywD-2lL0PEvy5SYrXEemn17gBnAymup2J1anMmaOonWfX3eDH1PLLEoy-g1KjR4RF6DC44OZmf5JuIgRTRqrjcLzfSdMOcWOkcyhEfDdwMd0b_gHzMOedFWKeYfInI8Fs47GLtoZ1RNQ2k0ppGx9gyHUcERdLKjt4tpEw" 
      width="900" 
      height="500" 
      allow="autoplay; encrypted-media; clipboard-write" 
      frameborder="0" 
      allowfullscreen></iframe>

      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={handleCleanMessage}>Clean Message</button>
      <ul>
        {posts.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;