import React, { useEffect, useState } from 'react'

const Search = ({ handleBodyDisable, handleBodyEnable, spotify, setSearchResult, top50IndiaRef, top50GlobalRef, top50ViralRef, scrollToSection }) => {

  const [search, setSearch] = useState();


  // console.log(searchResult);

  useEffect(() => {
    // let cancel=false;
    if (!search) return setSearchResult([])
    spotify.searchTracks(search, { limit: 15 })
      .then((res) => {
        // if(cancel) return
        setSearchResult(res.tracks.items)
      })

    // return ()=>cancel=true;
  }, [search])

  return (
    <div className='flex flex-col justify-center items-center bg-white w-screen py-3 my-3'>
      <div class="rounded-lg">
        <div class="flex">
          <div class="flex w-10 items-center border-2 justify-center rounded-tl-lg rounded-bl-lg border-r-0 border-gray-200 bg-white p-5 hover:cursor-pointer" onClick={handleBodyEnable}>
            {/* <button > */}
            <svg className='absolute w-5' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
            {/* </button> */}
          </div>
          <input type="text" class="border-2 w-[20rem] lg:w-[35rem] bg-white pl-2 text-base rounded-r-lg font-semibold outline-0" placeholder="Search song" id="" onClick={handleBodyDisable} onChange={(e) => { setSearch(e.target.value) }} />
        </div>
      </div>

      <div className='lg:hidden mt-6 mx-5 flex items-center justify-between'>
        <button className='bg-gray-600 px-3 py-1 mx-1 text-white rounded-lg' onClick={() => scrollToSection(top50IndiaRef)}>TOP 50 India</button>
        <button className='bg-gray-600 px-3 py-1 mx-1 text-white rounded-lg' onClick={() => scrollToSection(top50GlobalRef)}>TOP 50 Global</button>
        <button className='bg-gray-600 px-3 py-1 mx-1 text-white rounded-lg' onClick={() => scrollToSection(top50ViralRef)}>TOP 50 Viral</button>
      </div>

    </div>
  )
}

export default Search