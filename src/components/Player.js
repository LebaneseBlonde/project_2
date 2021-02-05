import React from 'react'
import ReactPlayer from 'react-player'


export default function Player({currentSong, firstLoad, width, height}) {
  if (firstLoad === true) {
    return <>
    </>
  }
  return <div  className='player'>  
    <ReactPlayer
      url={currentSong} controls width={width} height={height}
    />
  </div>
}
