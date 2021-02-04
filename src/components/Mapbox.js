import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MapGL, { Marker } from 'react-map-gl'
import marker from '../images/marker.png'

export default function Mapbox() {
  const countries = [
    {name: 'Germany', code: 'de', latlng: [51.0, 9.0]},
    {name: 'Great Britain', code: 'gb', latlng: [54.0, -2.0]},
    {name: 'U.S.A.', code: 'us', latlng: [38.0, -97.0]},
  ]

  const [modal, toggleModal] = useState('modal')

  const [viewPort, setViewport] = useState({
    height: '100vh',
    width: '100vw',
    zoom: 2,
    latitude: 40.0,
    longitude: -40,
  })

  const [countryTitle, setCountryTitle] = useState('')
  const [songs, setSongs] = useState([])
  const [loadingTrending, setLoadingTrending] = useState(true)
  let cCode = ''
  let cTitle = ''
  function fetchCountryTrend() {
    // setCountryCode('us')
    setCountryTitle(cTitle)
    axios.get(`https://www.theaudiodb.com/api/v1/json/523532/trending.php?country=${cCode}&type=itunes&format=singles`)
      .then(data => {
        const songData = data.data.trending
        setSongs(songData)
        setLoadingTrending(false)
    })
  }
  
    
    
   return <MapGL
      { ...viewPort}
      onViewportChange={(viewPort) => setViewport(viewPort)}
      mapboxApiAccessToken={'pk.eyJ1IjoiY2FsaWd1bGEtbWF0ZSIsImEiOiJja2txdDdzaXEwcHV3MnVwOHJkOXNiOGh3In0.GXRuw26W0nWLGA_9reTm5A'}
      mapStyle='mapbox://styles/caligula-mate/ckkr06ba32d6k17pg49o1fw1b'
    >
      {countries.map((country, index) => 
        <Marker
          key={index}
          latitude={country.latlng[0]}
          longitude={country.latlng[1]}
          onClick={() => {
            // setCountryCode('us')
            cCode = country.code
            cTitle = country.name
            fetchCountryTrend()
            toggleModal('modal is-active')
          }}
        >
          <img width={20} key={index} src={marker}/>
        </Marker>
      )}
      <TrendingModal loadingTrending={loadingTrending} songs={songs} setSongs={setSongs} modal={modal} toggleModal={toggleModal} countryTitle={countryTitle}/>
    </MapGL>
}

function TrendingModal({loadingTrending, songs, setSongs, modal, toggleModal, countryTitle}) {
  if(loadingTrending) return null
  return <div className={modal}>
    <div className="modal-background" onClick={() => { 
      toggleModal('modal') 
      setSongs([])
      }}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Trending Songs in {countryTitle}</p>
        <button className="delete" aria-label="close" onClick={() => { 
          toggleModal('modal') 
          setSongs([])
          }}></button>
      </header>
      <section className="modal-card-body">
          {songs.map((song, index) => {
            return <div key={index}>
              <h3 className='subtitle has-text-weight-semibold mb-1 mt-1'>{song.strTrack}</h3>
              <p>Artist: {song.strArtist}</p>
              <p>Album: {song.strAlbum}</p>
            </div>
          })}
      </section>
    </div>
  </div>
}