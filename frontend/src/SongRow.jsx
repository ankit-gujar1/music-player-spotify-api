import React from 'react'

const SongRow = ({ track, playSong, index, type }) => {
  // console.log(track);
  return (
    <div className="flex justify-start items-center m-4 rounded-lg hover:bg-gray-300 hover:cursor-pointer" onClick={() => playSong(track.uri, index, type)}>
      {/* <span className="mr-4">{index}</span> */}
      <img className="w-[80px] rounded-md" src={track.album.images[1].url} alt="" />
      <div className="p-2">
        <p className='font-semibold'>{track.name}</p>
        <p className='text-sm'>
          {track.artists[0].name}
        </p>
        {/* <p>
          {track.album.name}
        </p> */}
      </div>
    </div>
  )
}

export default SongRow