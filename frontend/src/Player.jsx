import React, { useRef, useState } from 'react'
import Footer from './Footer'
import Body from './Body'
import Search from './Search'
import { useStateContext } from './StateProvider'

const Player = ({ spotify, playlistId }) => {

    const top50IndiaRef = useRef(null);
    const top50GlobalRef = useRef(null);
    const top50ViralRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [searchResult,setSearchResult]=useState();

    // const i = discover_weekly.tracks.items;
    const [trackUri, setTrackUri] = useState([]);
    
    const playSong = (url, index, type) => {
        if(!type){
            setTrackUri(url)
        }
        //setTrackUri(url); //plays only that specific song
        // setTrackUri([url, discover_weekly.tracks.items[index + 1].track.uri, discover_weekly.tracks.items[index + 2].track.uri, discover_weekly.tracks.items[index + 3].track.uri, discover_weekly.tracks.items[index + 4].track.uri, discover_weekly.tracks.items[index + 5].track.uri, discover_weekly.tracks.items[index + 6].track.uri, discover_weekly.tracks.items[index + 7].track.uri, discover_weekly.tracks.items[index + 8].track.uri]);

        //netx 10 tracks but no
        const nextTracks = type.tracks.items
            .slice(index, index + 10) // Get the next 9 tracks including the current one
            .map(item => item.track.uri);
        setTrackUri(nextTracks);
        // console.log(trackUri);

        // const previousTracks = discover_weekly.tracks.items
        //     .slice(Math.max(0, index - 5), index) // Get the previous 4 tracks or as many as available
        //     .map(item => item.track.uri);

        // const nextTracks = discover_weekly.tracks.items
        //     .slice(index, index + 5) // Get the current track and the next 4 tracks
        //     .map(item => item.track.uri);

        // const allTracks = [...previousTracks, ...nextTracks];
        // setTrackUri(allTracks);
        // console.log(trackUri);
    }

    const [disable, setDisable] = useState("block");
    const [enable, setEnable] = useState("hidden");
    const disableBody = () => {
        setDisable("hidden");
        setEnable("block")
    }

    const enableBody = () => {
        setDisable("block");
        setEnable("hidden")
    }
    return (
        <div>
            {/* <div className='flex flex-col h-screen'> */}
            {/* <div className='flex h-[10%] bg-slate-500 justify-center items-center w-screen'>
                    <Search />
                </div> */}
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className='sticky top-0 z-10'>
                    <Search handleBodyDisable={disableBody} handleBodyEnable={enableBody} spotify={spotify} setSearchResult={setSearchResult} top50GlobalRef={top50GlobalRef} top50IndiaRef={top50IndiaRef} top50ViralRef={top50ViralRef} scrollToSection={scrollToSection}/>
                </div>
                {/* <div className={disable}> */}
                <Body spotify={spotify} playSong={playSong} disable={disable} enable={enable} searchResult={searchResult} top50GlobalRef={top50GlobalRef} top50IndiaRef={top50IndiaRef} top50ViralRef={top50ViralRef}/>

                {/* </div> */}
                <div className='w-screen sticky bottom-0'>
                    <Footer trackUri={trackUri} playlistId={playlistId} />
                </div>
            </div>
            {/* <div className='flex h-[10%] bg-slate-500 justify-center items-center w-screen'>
                    
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default Player