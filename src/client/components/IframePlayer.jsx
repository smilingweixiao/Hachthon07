import { DepthAttachment } from 'maplibre-gl';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const IframePlayer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("hihi~~~~");
    var result = document.getElementsByClassName('d-inline-flex flex-column mr-2');
    for (var i = 0; i < result.length; i++) {
      console.log(result[i].innerText);
    }
  })
  
  return (
    <div>
      <iframe src="https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjhmNGVjYTBlLTY1ZDQtNDI3OS1hNTk0LWIyMGNmYTI1NWQ2YiIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX0xJVkVfRVZFTlQifQ.YquGmi8BNkErSg56M0HuJrcZvOeYXX3YjAo-_LZuN4O1Rpijf0jrCIDZU6Li_QOBa1AhzPpRgolUC0QWPCyMgdz-MiWJx5LDGFlN6egOqr0yREYaCAhRE1J1uyDmGaiKRcIICppG3ykAl69223L6gy7xXNVEL0N5djBGRj2i_Egwf-AZdQpWkWQ5a2TU9C5jCW92fhgVtKiMkquBGF_Ba2p2_HK67wGbw-uE3Fn8biTcxCTDagr5vB9Bq5gTtf6HdZ9bTDQugOYBZfcfaFLCbsx6PNhNkH4WcDWHx0M7TigoWOD7O_EqqOzfX6rnjKDwio-LCIomreGV_SAsUccAfcWl1DZATIwmRajCjMY0TFjJXzUpH-IGMoHj-dAbA7itWbi8g7LMlcikVrc2Ty36zd-NFb7Q919TK0XsL_Mrmtjtn4Xd5PUukONBdheQsiirGZhPVhnEeasmHSpa5wygJeyvhb8cZzkK2CD3mYPm-jluhoMsd_DHRVgNdIschvgBIYrhIBFsAjfoSOkBkG3Uwct08-DIT9hy4oYRMTaFulwzUxm3NaSiTAWCfs5bumuqAo9fBRhhgrjki_hfLDInJIWQTuYJVv_KP1A3d5blrMJs-0m_pLfdQkJujAPHylli3hdIzbYdrc-L0--Ljd-yaz0tYLQFuOY1i4UNnD50mTk"
      width="1200"
      height="700"
      allow="autoplay; encrypted-media; clipboard-write"
      frameBorder="0"
      allowfullscreen>
      </iframe>
    </div>
  );
};

export default IframePlayer;
