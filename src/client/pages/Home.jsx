import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useOutletContext } from "react-router-dom";

import { ParseMessage} from "./TextFilter";

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
  
  // useEffect(() => {
  //   ReadWeb();
  // });

  useEffect(() => {
    ParseMessage();
  });



  
  return (
    <div>
      {/* <h2>Home page</h2> */}
      <iframe src="https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjM0MzkwZTgwLTRkZDItNGNkNi1hNGVmLWFiOTgxOTZjNTZkNSIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX0xJVkVfRVZFTlQifQ.lULpkvVvgWiOF5oq7bbrls6XTbS0Zo4Z5a6WYmenJkXH0izrk8DljE85Xxy9ZtCmEGFEUfBVtD9GI6TjAct5Q3qtfxRT_BqeswUyrXX5J6842btXIYIRVsSidTVANIH2dB5stgT9f5Pp45w5odYHXgTOFbknTvFhdR4d1GcKXbS3OTBI7ZPbORD9QVbXCyaDXwP5IlZ_aaIYEOoyHPVk_6NQfrmn5IvxHXwJdMXqmlrV_F6gi006O3uUrwDQSBTi7eGkptrz8FcI9oxX2iBctnoN8Htjr4oAaMS-GKmGt1rH3tZNrRqbrVbZMXp9vGBb8HBOUVYtgQCIHkkBqxfsVtKfDR2miMOCcdyVIANE0UxpGXpFP6a7KND202V7ZeRHth1NaZcyGfOuWtcr6iatUDe_O-YqDzllJ42IwRMVGWss11qeIaO8mULAvYlA6qMxTBtNVDqx13IqKkjfIz_54NKp8X9O-Te441G9GooaE-tFom2F1XeExPCuPwV0-X1ScIBJ1kLNmC4pEY0hDVNr1S4gb_wwCqxXMCDMKZ5vzGpb8T2dahvfoQZT1_ur0tg4-r9IAz3PtEqUZyFfVBJeXQ3xEvN6aOMgweCj9BQPUB1aQV-CBzgMrEt-KWYirdEvgU1yzzAN5ppIxbypHxHX4ZqjE_J5D6wthb6IQpg3ecs"
        width="1200"
        height="700"
        allow="autoplay; encrypted-media; clipboard-write"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  );
};

export default Home;