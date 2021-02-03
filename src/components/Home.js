import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function Home( {}) {
// export default function Home( { artist, updateArtist}) {

const artist = 'bonobo'

  return <section className="hero is-primary is-fullheight-with-navbar">
    <div className="hero-body">
      <div className='container'>
        <div>
          {/* <input className='input' type='text' placeholder='Artist/album name...' width='200' onChange={(event) => updateArtist(event.target.value)}/> */}
          <input className='input' type='text' placeholder='Artist/album name...' width='200'/>
        </div>
        <div className='container has-text-centered'>
          <Link to={`/artist/${artist}`}> 
            <button className='button'>Search</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
}
