import React, { useEffect, useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useStateContext } from './StateProvider';

const Footer = ({ trackUri, playlistId }) => {
    const [{ discover_weekly }, dispatch] = useStateContext();
    const [{ token }] = useStateContext();
    const [play,setPlay]=useState(false);
    const playlistUri="spotify:playlist:"+playlistId;
    useEffect(()=>{
        setPlay(true);
    },[trackUri])

    if (!token) return null
    return (
        <SpotifyPlayer
            token={token}
            showSaveIcon
            uris={trackUri ? trackUri : [playlistUri]}
            callback={state=>{
                if(!state.isPlaying) setPlay(false);
            }}
            play={play}
            
            styles={{
                bgColor: '#fff',
                sliderTrackColor: '#6b7280',
                sliderColor: '#000',
                color: '#000',
                trackNameColor: '#000'
            }}
        />
    )
}

export default Footer