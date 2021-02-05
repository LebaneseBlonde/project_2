import React from 'react'
import ReactPlayer from 'react-player'


export default function Footer() {
  return <div  className='player'>  
    <ReactPlayer
      url="https://soundcloud.com/synkro/look-at-yourself" controls width='100%' height='80px'
    />
  </div>
}
