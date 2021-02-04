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
    
  return <div>
    <p>{artistData.strArtist}</p>
    <p>{artistData.strLabel}</p>
    <p>{artistData.strStyle}</p>
    <p>{artistData.strGenre}</p>
    <p>{artistData.strBiographyEN}</p>
  </div>
}

function mapStateToProps(state){
  return {
    inputValue: state.inputValue
  }
} 

export default connect(mapStateToProps)(Artist)