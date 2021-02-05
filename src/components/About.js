import React from 'react'

import babelLogo from '../images/logos/babel.png'
import bulmaLogo from '../images/logos/bulma.png'
import htmlLogo from '../images/logos/html.png'
import jsLogo from '../images/logos/js.png'
import mapboxLogo from '../images/logos/mapbox.png'
import reactLogo from '../images/logos/react.png'
import reactRouterLogo from '../images/logos/reactrouter.png'
import reduxLogo from '../images/logos/redux.png'
import sassLogo from '../images/logos/sass.png'
import webpackLogo from '../images/logos/webpack.png'



export default function About() {
  const logos = [babelLogo, bulmaLogo, htmlLogo, jsLogo, mapboxLogo, reactLogo, reactRouterLogo, reduxLogo, sassLogo, webpackLogo]

  return <div className='aboutPage'>
    <h1 className='is-title-2 has-text-centered has-text-weight-bold mb-6'>Technologies Used</h1>
    <div className='container logos'>
      {logos.map((logo, index) => {
        return <div className='container techLogo' key={index}>
            <figure className='image is-128x128'>
              <img src={logo}/>
            </figure>
        </div>
      })}

    </div>
  </div>
}
