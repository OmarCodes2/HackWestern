import { useEffect, useState } from "react";
import "./components/LoginPage.css";
import spotifylogo from "./images/spotifylogo.png";
import personOutline from "./images/personOutline.png";
import personSingularOutline from "./images/personSingularOutline.png";
import versesLogo from "./images/versesLogo.png";
import axios from "axios";
import loginCloud1 from "./images/LoginCloud1.png";
import { Link } from "react-router-dom";

function App() {
  const CLIENT_ID = "fcc0e957cd3141beb471ba64fa7e50c0";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  let listSongs = [];
  let listArtists = [];

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

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

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/artists?limit=50",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setArtists(data.items);
  };

  const searchSongs = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=50",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        /*params: {
                q: searchKey,
                type: "artist"
            }*/
      }
    );
    setSongs(data.items);
  };

  const callBoth = async (e) => {
    searchSongs(e);
    console.log(songs);
    searchArtists(e);
    console.log(artists);

    for (let i = 0; i < 50; i++) {
      const artistObject = {
        id: i,
        name: artists[i].name,
        image: artists[i].image,
      };
      const songsObject = {
        id: i,
        name: songs[i].name,
        artist: songs[i].artists.name,
      };
      listSongs.push(songsObject);
      listArtists.push(artistObject);
    }
    console.log("hello");
    console.log(listSongs);
    console.log(listArtists);
  };

  const renderArtists = () => {
    console.log("hello");
    console.log(listSongs);
    console.log(listArtists);
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  // const renderSongs = () => {
  //     return artists.map(artist => (
  //         <div key={artist.id}>
  //             {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
  //             {artist.name}
  //         </div>
  //     ))
  // }

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
        <div className="versesTitle">verses</div>
      </div>
      <div className="text">
        <div className="whiteText">a &nbsp;</div>
        <div className="greenText">music quiz &nbsp;</div>
        <div className="whiteText">for </div>
      </div>
      <div className="text whiteText">friends versus friends</div>
      {token ? (
        <button className="small_button" onClick={callBoth} type={"Play Game"}>
          Start!
        </button>
      ) : (
        <div></div>
      )}
      {!token ? (
        <a
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
      ) : (
        <button className="small_button" onClick={logout}>
          Logout
        </button>
      )}
      {renderArtists()}
    </div>
  );
}

export default App;
