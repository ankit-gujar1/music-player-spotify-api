import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getTokenFromUrl } from './spotify';
import Login from './Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateContext } from './StateProvider';

const spotify = new SpotifyWebApi();
function App() {

  const [{ user, token }, dispatch] = useStateContext();

  const [playlistId,setPlaylistId]=useState("37i9dQZEVXbLZ52XmnySJg");

  // const accessToken=useAuth(code);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.getPlaylist(playlistId).then((response) =>{
        console.log("playlist",response);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      }
      )

      spotify.getPlaylist("37i9dQZEVXbNG2KDcFcKOF").then((response) =>{
        console.log("playlist",response);
        dispatch({
          type: "SET_TOP_GLOBAL",
          top_global: response,
        })
      }
      )

      spotify.getPlaylist("37i9dQZEVXbLiRSasKsNU9").then((response) =>{
        console.log("playlist",response);
        dispatch({
          type: "SET_VIRAL_GLOBAL",
          viral_global: response,
        })
      }
      )

      spotify.getMe()
        .then((r) => {
          dispatch({
            type: 'SET_USER',
            user: r
          })
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        })
    }
    // console.log("token", _token);
  }, [])
  // console.log("context", user, "token", token);
  return (
    <div className='w-full'>
      {
        token ? <Player spotify={spotify} playlistId={playlistId}/> : <Login />
      }
    </div>
  )
}

export default App;
