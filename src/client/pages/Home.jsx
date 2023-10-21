import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useOutletContext } from "react-router-dom";

import { getWeather, getMessage } from "../api/chatroom";

import IframePlayer from "../components/IframePlayer.jsx";

import "react-bootstrap";

/**
 * Renders a Home component with a title "Home page" 
 * and logs the user and authentication status on mount.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home = () => {
  const [user, authStatus] = useOutletContext();
  const navigate = useNavigate();
  
  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })

  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.data.command === 'ping') {
        Array.from(document.querySelectorAll('iframe')).forEach(iframe => 
          iframe?.contentWindow?.postMessage({ command: 'pong' }, '*')
        );
      }
    })
  });
  
  useEffect(() => {
    getWeather();
  });

  useEffect(() => {
    getMessage();
  });
  
  return (
    <div>
      {/* <h2>Home page</h2> */}
      <IframePlayer/>
    </div>
  );
};

export default Home;