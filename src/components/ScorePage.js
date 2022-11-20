import React from "react";
import versesLogo from "../images/versesLogo.png";
import music from "../images/music.png";
import repeat from "../images/repeat.png";
import peoplesOutline from "../images/peoplesOutline.png";

function ScorePage() {
  return (
    <div className="backgroundScorePage">
      <div className="logoTitle">
        <img style={{ height: 80 }} src={versesLogo} className="logoWrapper" />
        <h2 className="versesTitle">verses</h2>
      </div>
      <div className="text">
        <div className="ellipse">
          <img src={music} />
        </div>
      </div>
      <div className="congrats ">congrats!</div>
      <div className="scoreMessage">your final score is: </div>
      <div className="text buttonWrapper">
        <button className="buttonTwo">
          <img
            src={peoplesOutline}
            style={{ height: 30, width: 30 }}
            className="spotifyImage"
          />
          Share Quiz
        </button>
      </div>
      <div className="text buttonWrapper">
        <button className="buttonTwo">
          <img
            src={repeat}
            style={{ height: 30, width: 30 }}
            className="spotifyImage"
          />
          Take Again
        </button>
      </div>
    </div>
  );
}

export default ScorePage;
