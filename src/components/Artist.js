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
      <img src={imageSelect()} 
           alt={artistData.strArtist}
           width='300px'/>
      <div id='info'>
        <div id='tags'>
          <div>{artistData.strStyle}</div>
          <div>{artistData.strGenre}</div>
        </div>
        <a href={artistData.strWebsite} target='_blank'>{artistData.strWebsite}</a>
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