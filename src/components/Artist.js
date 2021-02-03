import React, { useState, useEffect } from 'react'
import axios from 'axios'
// const API_KEY = process.env.REACT_APP_APIKEY

export default function Artist({artist}) {
  const [artistData, updateArtistData] = useState({})
  const currentArtist = 'bonobo'

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
    axios.get(`https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${currentArtist}`)
      .then(({data}) => {
        const info = data.artists[0]
        updateArtistData(info)
      })
  }, [])
    
  return <div>
    <p>{artistData.strArtist}</p>
  </div>
}