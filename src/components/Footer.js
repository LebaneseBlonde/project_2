import React from 'react'
import ReactPlayer from 'react-player'


export default function Footer({currentSong}) {
  return <div  className='player'>  
    <ReactPlayer
      url={currentSong} controls width='100%' height='80px'
    />
  </div>
}
// https://soundcloud.com/synkro/look-at-yourself