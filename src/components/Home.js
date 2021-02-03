import axios from 'axios'
import React, {Link} from 'react'


export default function Home() {

  const [artist, updateArtist] = useState('')

  return <section className="hero is-primary is-fullheight-with-navbar">
    <div className="hero-body">
      <div className='container'>
        <div>
          <input className='input' type='text' placeholder='Artist/album name...' width='200' onChange={(event) => updateArtist(event.target.value)}/>
        </div>
        <div className='container has-text-centered'>
          <Link to={{
            pathname: `project_2/artist/${artist}`
            }}> 
            <button className='button'>Search</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
}
