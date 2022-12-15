import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import smoke from "../src/assets/Apes.mp4";
import mobile from "../src/assets/Apes epic video mobile.mp4";

const Player = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const [activeSuond, setActiveSound] = useState(false);

  const ref = useRef();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleAudio = () => {
    ref.current.muted = !ref.current.muted;
    setActiveSound(!activeSuond);
  };

  return (
    <div>
      {isDesktop ? (
        <video ref={ref} autoPlay muted loop className="bg-vid">
          <source src={smoke} type="video/mp4" />
        </video>
      ) : (
        <video ref={ref} autoPlay muted loop className="bg-vid">
          <source src={mobile} type="video/mp4" />
        </video>
      )}
      <div className="controls_container">
        <span onClick={handleAudio} className="volume_container">
          <div className="icon_text">
            {activeSuond ? (
              <>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
                <span>Sound on</span>
              </>
            ) : (
              <>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
                <span>Sound off</span>
              </>
            )}
          </div>
        </span>
        <span
          onClick={() => window.location.reload(false)}
          className="replay_container"
        >
          <div className="icon_text">
            <span>Replay</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        </span>
      </div>
    </div>
  );
};
export default Player;
