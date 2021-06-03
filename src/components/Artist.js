import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

function Artist(props) {
  const currentSong = props.currentSong
  const updateCurrentSong = props.updateCurrentSong
  const firstLoad = props.firstLoad
  const updateFirstLoad = props.updateFirstLoad
  const artAlb = props.inputValue
  const [artistData, updateArtistData] = useState({})
  const [discog, updateDiscog] = useState([])
  const [top10, updateTop10] = useState([])
  const [currentAlbum, updateCurrentAlbum] = useState({
    name: '',
    image: '',
    release: '',
    format: ''
  })
  const [loading1, updateLoading1] = useState(true)
  const [loading2, updateLoading2] = useState(true)
  const [loading3, updateLoading3] = useState(true)
  const [modal, updateModal] = useState('modal')
  const [albumModal, updateAlbumModal] = useState('modal')

  useEffect(() => {
    axios.get(`https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${artAlb}`)
      .then(({data}) => {
        if (!data.artists) {
          updateArtistData(false)
          updateLoading1(false)
        } else {
          const info = data.artists[0]
          updateArtistData(info)
          updateLoading1(false)
          updateFirstLoad(false)
        }
      })
  }, [])

  useEffect(() => {
    axios.get(`https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${artAlb}`)
      .then((data) => {
        if (!data.data.album) {
          updateLoading2(false)
        } else {
          const albumInfo = data.data.album.filter((album) => {
            return album.strAlbumThumb !== null && album.strAlbumThumb !== ''
          })
          updateDiscog(albumInfo)
          updateLoading2(false)
        }
      })
  }, [])

  useEffect(() => {
    axios.get(`https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=${artAlb}`)
      .then((data) => {
        if (!data.data.track) {
          updateLoading3(false)
        } else {
          const tracksInfo = data.data.track
          updateTop10(tracksInfo)
          updateLoading3(false)
        }
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
    return <div id='loading'>
      <p>Loading...</p>
    </div>
  }

  if (!artistData) {
    return <div id='notFound'>
      <p>Sorry, artist not found.</p>
    </div> 
  }

  return <div id='artistPage'>
    <div id='artistTop'>
      <h1 id='artistTitle' className='has-text-weight-bold'>{artistData.strArtist}</h1>
    </div>
    <div id='artistBody'>
      <div id='imgInfo'>
        <img id='artistImg' 
             src={imageSelect()} 
             alt={artistData.strArtist}
             width='250px'/>
        <div id='info'>
          <a href={`https://${artistData.strWebsite}`} target='_blank'>{artistData.strWebsite}</a>
          <p>Style: {artistData.strStyle}</p>
          <p>Genre: {artistData.strGenre}</p>
          <p>Label: {artistData.strLabel}</p>
          <p>Members: {artistData.intMembers}</p>
          <p>Year Formed: {artistData.intFormedYear}</p>
        </div>
      </div>
      <div id='nameDiscog'>
        <div id='bio'>
          <p>'{artistData.strBiographyEN.substr(0, 150) + '...'} <a><span   className='has-text-weight-semibold' id='more' onClick={() => updateModal('modal  is-active')}>Read more</span></a></p>
        </div> 
        <h2 id='discogTitle' className='has-text-weight-bold'>Discography</h2>
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
            if (track.strMusicVid) {
              return <div key={index} className='topTrack'>
                <p>{index +1}. <a onClick={() => updateCurrentSong(track.strMusicVid)}>
                {track.strTrack}</a> |   Album: {track.strAlbum}</p>
              </div>
            } else {
              return <div key={index} className='topTrack'>
                <p>{index +1}. {track.strTrack} |   Album: {track.strAlbum}</p>
              </div>
            }
          })}
        </div>
      </div>
    </div>
    <div className={modal}>
      <div className='modal-background' onClick={() => updateModal('modal')}></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Bio</p>
          <button className='delete' aria-label='close' onClick={() => updateModal('modal')}></button>
        </header>
        <section className='modal-card-body'>
          <p>{artistData.strBiographyEN}</p>
        </section>
        <footer className='modal-card-foot'>
        </footer>
      </div>
    </div>
    <div className={albumModal}>
      <div className='modal-background' onClick={() => updateAlbumModal('modal')}></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{currentAlbum.name}</p>
          <button className='delete' aria-label='close' onClick={() => updateAlbumModal('modal')}></button>
        </header>
        <section className='modal-card-body'>
          <img id='albumModalImage' src={currentAlbum.image} alt={currentAlbum.name}/>
        </section>
        <footer id='albumFooter' className='modal-card-foot'>
          <p>Release Year: {currentAlbum.release}</p>
          <p>Release Format: {currentAlbum.format}</p>
        </footer>
      </div>
    </div>
  </div>
}
function mapStateToProps(state){
  return {
    inputValue: state.inputValue,
    currentSong: state.currentSong,
    firstLoad: state.firstLoad
  }
} 
function mapDispatchToProps(dispatch) {
  return {
    updateCurrentSong: (song) => {
      const action = {type: 'SONG_CHANGE', song: song}
      dispatch(action)
    },
    updateFirstLoad: (load) => {
      const action = {type: 'UPDATE_FIRST_LOAD', load: load}
      dispatch(action)
    },
    inputChanged: () => {
      const action = {type: 'INPUT_CHANGE', text: event.target.value}
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Artist)