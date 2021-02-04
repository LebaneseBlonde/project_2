import React from 'react'
import ReactPlayer from 'react-player'


export default function Footer() {
  return <div>
    <div>
      <ReactPlayer
        url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata" controls width='100%' height='80px'
      />
    </div>
  </div>
}
