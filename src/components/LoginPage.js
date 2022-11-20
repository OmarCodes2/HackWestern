import { useEffect, useState } from "react";
import "./LoginPage.css";
import spotifylogo from "../images/spotifylogo.png";
import personOutline from "../images/personOutline.png";
import personSingularOutline from "../images/personSingularOutline.png";
import versesLogo from "../images/versesLogo.png";
import axios from "axios";
import loginCloud1 from "../images/LoginCloud1.png";

function LoginPage() {
  const CLIENT_ID = "fcc0e957cd3141beb471ba64fa7e50c0";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  // const getToken = () => {
  //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
  //     let token = urlParams.get('access_token');
  // }

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="background">
      <h1 className="signInTitle">
        {/* <img src={loginCloud1} /> */}
        sign in
      </h1>
      <div className="text">
        <div className="ellipse">
          <img src={personSingularOutline} />
        </div>
      </div>
      <div className="logoTitle">
        <img style={{ height: 80 }} src={versesLogo} className="logoWrapper" />
        <h2 className="versesTitle">verses</h2>
      </div>
      <div className="text">
        <div className="whiteText">a &nbsp;</div>
        <div className="greenText">music quiz &nbsp;</div>
        <div className="whiteText">for </div>
      </div>
      <div className="text whiteText">friends versus friends</div>
      {!token ? (
        <div>
          <a
            className="buttonText"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
          >
            <div className="text buttonWrapper">
              <button className="button">
                <img
                  src={spotifylogo}
                  style={{ height: 30, width: 30 }}
                  className="spotifyImage"
                />
                Continue with Spotify
              </button>
            </div>
          </a>
        </div>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}

export default LoginPage;
