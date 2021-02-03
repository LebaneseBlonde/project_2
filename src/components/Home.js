import React, {Link} from 'react'


export default function Home() {

  return <section className="hero is-primary is-fullheight-with-navbar">
    <div className="hero-body">
      <div className='container'>
        <div>
          <input className='input' type='text' placeholder='Artist/album name...' width='200'/>
        </div>
        <div className='container has-text-centered'>
          <button className='button'>Search</button>
        </div>
      </div>
    </div>
  </section>
}
