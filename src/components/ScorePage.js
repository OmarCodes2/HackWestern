import React from "react";
import versesLogo from "../images/versesLogo.png";
import music from "../images/music.png";
import repeat from "../images/repeat.png";
import peoplesOutline from "../images/peoplesOutline.png";

function ScorePage(props) {
  const replay = () => {
    props.finish(0);
    props.resetScore(0);
  };
  return (
    <div className="backgroundScorePage">
      <div className="logoTitle2">
        <img
          style={{ height: 100, width: 100 }}
          src={versesLogo}
          className="logoWrapper2"
        />
        <h2 className="versesTitle titleWrapper">verses</h2>
      </div>
      <div className="text">
        <div className="ellipse">
          <img src={music} style={{ height: 200, width: 200 }} />
        </div>
      </div>
      <div className="congrats">congrats!</div>
      <div className="scoreMessage">your final score is: {props.score}</div>
      <div className="text buttonWrapper2">
        <button className="buttonTwo">
          <img
            src={peoplesOutline}
            style={{ height: 50, width: 50 }}
            className="spotifyImage"
          />
          Share Quiz
        </button>
      </div>
      <div className="text buttonWrapper">
        <button className="buttonTwo" onClick={replay}>
          <img
            src={repeat}
            style={{ height: 60, width: 60 }}
            className="spotifyImage"
          />
          Take Again
        </button>
      </div>
    </div>
  );
}

export default ScorePage;
