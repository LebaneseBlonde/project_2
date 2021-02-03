import React, { useEffect } from 'react'

export default function Artist() {

  const [artistData, updateArtistData] = useState({})

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
    axios.get(`www.theaudiodb.com/api/v1/json/523532/search.php?s=${artist}`)
      .then(({data}) => {
        const info = data.artists[0]
        updateArtistData(info)
      })
  }, [])
    
  return <div>
  </div>
}