import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
// const API_KEY = process.env.REACT_APP_APIKEY

function Artist(props) {
  const [artistData, updateArtistData] = useState({})
  const artAlb = props.inputValue

  // id= artistData.idArtist
  // name= artistData.strArtist
  // label= artistData.strLabel
  // yearFormed= artistData.intFormedYear
  // disbanded= artistData.strDisbanded
  // members= artistData.intMembers
  // style= artistData.strStyle
  // genre= artistData.strGenre
  // website= artistData.strWebsite
  // bio= artistData.strBiographyEN
  // image= artistData.strArtistWideThumb

  useEffect(() => {
    axios.get(`https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${artAlb}`)
      .then(({data}) => {
        const info = data.artists[0]
        updateArtistData(info)
      })
  }, [])

  function imageSelect() {
    if (artistData.strArtistWideThumb) {
      return artistData.strArtistWideThumb
    } else {
      return artistData.strArtistThumb
    }
  }
    
  return <div id='artistPage'>
    <div id='imgBio'>
      <img id='artistImg' 
           src={imageSelect()} 
           alt={artistData.strArtist}
           width='60%'/>
      <div id='info'>
        <div id='tags' width='100%'>
          <div className='tag'>{artistData.strStyle}</div>
          <div className='tag'>{artistData.strGenre}</div>
        </div>
        <a href={artistData.strWebsite} target='_blank'>{artistData.strWebsite}</a>
        <p>Label: {artistData.strLabel}</p>
        <p>Members: {artistData.intMembers}</p>
        <p>Year Formed: {artistData.intFormedYear}</p>
        <p>Disbanded: {artistData.strDisbanded}</p>
      </div>
    </div>
    <div id='nameDiscog'>
      <h1 id='title'>{artistData.strArtist}</h1>
      <div id='discog'>
      </div>  
    </div>
    <div id='tracksPlaylist'>
    </div>
  </div>
}

function mapStateToProps(state){
  return {
    inputValue: state.inputValue
  }
} 

export default connect(mapStateToProps)(Artist)