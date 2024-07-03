import React, { useRef } from 'react'
import { useStateContext } from './StateProvider';
import SongRow from './SongRow';
import { Link } from 'react-router-dom';

const Body = ({ spotify, playSong, disable, enable, searchResult, top50IndiaRef, top50GlobalRef, top50ViralRef }) => {
    const [{ discover_weekly, viral_global, top_global }, dispatch] = useStateContext();
    if (!discover_weekly) {
        return <div>No items available</div>;
    }
    if (!viral_global) {
        return <div>No items available</div>;
    }
    if (!top_global) {
        return <div>No items available</div>;
    }
    const limitedTracks = discover_weekly.tracks.items;
    const limitedViralTracks = viral_global.tracks.items;
    const limitedTopTracks = top_global.tracks.items;


    // console.log(searchResult);

    // const playPlaylist = (id) => {
    //     spotify
    //         .play({
    //             context_uri: `spotify:playlist:37i9dQZF1E379JDyvUbn0K`,
    //         })
    //         .then((res) => {
    //             spotify.getMyCurrentPlayingTrack().then((r) => {
    //                 dispatch({
    //                     type: "SET_ITEM",
    //                     item: r.item,
    //                 });
    //                 dispatch({
    //                     type: "SET_PLAYING",
    //                     playing: true,
    //                 });
    //             });
    //         });
    // };



    // const playSong = (id) => {
    //     spotify
    //         .play({
    //             uris: [`spotify:track:${id}`],
    //         })
    //         .then((res) => {
    //             spotify.getMyCurrentPlayingTrack().then((r) => {
    //                 dispatch({
    //                     type: "SET_ITEM",
    //                     item: r.item,
    //                 });
    //                 dispatch({
    //                     type: "SET_PLAYING",
    //                     playing: true,
    //                 });
    //             });
    //         });
    // };

    return (
        <div className={`h-full w-full overflow-auto`}>
            {/* <Header spotify={spotify} /> */}

            {/* <div className="body__info">
          <img src={discover_weekly?.images[0]?.url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div> */}



            <div className={`flex flex-col lg:flex-row overflow-y-auto justify-center ${disable} mt-1`}>

                <div ref={top50IndiaRef} className='flex-col'>
                    <p className='flex justify-center text-4xl font-semibold'>TOP 50 - India</p>
                    
                    {limitedTracks.map((item, index) => (
                        <SongRow playSong={playSong} track={item.track} index={index} type={discover_weekly} />
                    ))}
                </div>

                <div ref={top50GlobalRef} className='flex-col'>
                    <p className='flex justify-center text-4xl font-semibold'>TOP 50 - Global</p>
                    
                    {limitedTopTracks.map((item, index) => (
                        <SongRow playSong={playSong} track={item.track} index={index} type={top_global} />
                    ))}
                </div>

                <div ref={top50ViralRef} className='flex-col'>
                    <p className='flex justify-center text-4xl font-semibold'>TOP 50 - Viral</p>
                    
                    {limitedViralTracks.map((item, index) => (
                        <SongRow playSong={playSong} track={item.track} index={index} type={viral_global} />
                    ))}
                </div>
            </div>

            {/* search results */}
            <div className={`flex overflow-y-auto justify-center ${enable}`}>
                <div className='flex-col lg:w-[50%]'>
                    {searchResult.map((item, index) => (
                        <SongRow playSong={playSong} track={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Body