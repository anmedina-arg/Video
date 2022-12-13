import React, { useEffect, useState } from "react";
import "./index.css";
import smoke from "../src/assets/Apes.mp4";
import mobile from "../src/assets/Apes epic video mobile.mp4";

const Player = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <video autoPlay loop muted className="bg-vid">
          <source src={smoke} type="video/mp4" />
        </video>
      ) : (
        <video autoPlay loop muted className="bg-vid">
          <source src={mobile} type="video/mp4" />
        </video>
      )}
    </div>
  );
};
export default Player;
