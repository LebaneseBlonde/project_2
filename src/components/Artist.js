import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
// const API_KEY = process.env.REACT_APP_APIKEY

function Artist(props) {
  const [artistData, updateArtistData] = useState({})
  const [discog, updateDiscog] = useState([])
  const [top10, updateTop10] = useState([])
  const [currentAlbum, updateCurrentAlbum] = useState({
    name: '',
    image: '',
    release: '',
    format: ''
  })
  const artAlb = props.inputValue
  const [loading1, updateLoading1] = useState(true)
  const [loading2, updateLoading2] = useState(true)
  const [loading3, updateLoading3] = useState(true)
  const [modal, updateModal] = useState('modal')
  const [albumModal, updateAlbumModal] = useState('modal')

  useEffect(() => {
    axios.get(`https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${artAlb}`)
      .then(({data}) => {
        const info = data.artists[0]
        updateArtistData(info)
        updateLoading1(false)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${artAlb}`)
      .then((data) => {
        const albumInfo = data.data.album
        updateDiscog(albumInfo)
        updateLoading2(false)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=${artAlb}`)
      .then((data) => {
        const tracksInfo = data.data.track
        updateTop10(tracksInfo)
        updateLoading3(false)
      })
  }, [])

  function imageSelect() {
    if (artistData.strArtistWideThumb) {
      return artistData.strArtistWideThumb
    } else {
      return artistData.strArtistThumb
    }
  }

  if (loading1 === true || loading2 === true || loading3 === true) {
    return <div>Loading...</div>
  } else {
    console.log(top10)
  }
    
  return <div id='artistPage'>
    <div id='imgInfo'>
      <img id='artistImg' 
           src={imageSelect()} 
           alt={artistData.strArtist}
           width='250px'/>
      <div id='info'>
        <a href={artistData.strWebsite} target='_blank'>{artistData.strWebsite}</a>
        <p>Style: {artistData.strStyle}</p>
        <p>Genre: {artistData.strGenre}</p>
        <p>Label: {artistData.strLabel}</p>
        <p>Members: {artistData.intMembers}</p>
        <p>Year Formed: {artistData.intFormedYear}</p>
        <p>Disbanded: {artistData.strDisbanded}</p>
      </div>
    </div>
    <div id='nameDiscog'>
      <h1 id='artistTitle' className='has-text-weight-bold'>{artistData.strArtist}</h1>
      <div id='bio'>
        <p>{artistData.strBiographyEN.substr(0, 150) + '...'}<a><span className='has-text-weight-semibold' id='more' onClick={() => updateModal('modal is-active')}>Read more</span></a></p>
      </div> 
      <h2 className='has-text-weight-bold'>Discography</h2>
      <div id='discog'>
        {discog.map((album, index) => {
          return <div key={index} className='discogItem'>
            <img className='albumThumb' 
                 src={album.strAlbumThumb}
                 onClick={() => {
                   updateCurrentAlbum({
                     name:album.strAlbum,
                     image:album.strAlbumThumb,
                     release:album.intYearReleased,
                     format:album.strReleaseFormat                    
                   })
                   updateAlbumModal('modal is-active')
                 }}/>
          </div>
        })}
      </div> 
    </div>
    <div id='tracksPlaylist'>
      <div id='topTracks'>
      <h2 id='topTitle' className='has-text-weight-bold'>Top Tracks</h2>
        {top10.map((track, index) => {
        return <div key={index} className='topTrack'>
          <p>{index +1}. <a href={track.strMusicVid} target='_blank'>{track.strTrack}</a> | Album: {track.strAlbum}</p>
        </div>
      })}
      </div>
      
    </div>
    <div className={modal}>
      <div className='modal-background' onClick={() => updateModal('modal')}></div>
      <div className='modal-card'>
        <div className='modal-card-body'>
          <p>{artistData.strBiographyEN}</p>
        </div>
        <button className='modal-close is-large' 
                aria-label='close'
                onClick={() => updateModal('modal') }>
        </button>
      </div>
    </div>
    <div className={albumModal}>
      <div className="modal-background" onClick={() => updateAlbumModal('modal')}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{currentAlbum.name}</p>
          <button className="delete" aria-label="close" onClick={() => updateAlbumModal('modal')}></button>
        </header>
        <section className="modal-card-body">
          <img id='albumModalImage' src={currentAlbum.image} alt={currentAlbum.name}/>
        </section>
        <footer className="modal-card-foot">
          <p>Release Year: {currentAlbum.release}</p>
          <p>Release Format: {currentAlbum.format}</p>
        </footer>
      </div>
    </div>
  </div>
}

function mapStateToProps(state){
  return {
    inputValue: state.inputValue
  }
} 

export default connect(mapStateToProps)(Artist)