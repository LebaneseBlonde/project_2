import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Home(props) {
// export default function Home( { artist, updateArtist}) {

console.log(props.inputValue)
const artAlb = props.inputValue

  return <section className="hero is-primary is-fullheight-with-navbar">
    <div className="hero-body">
      <div className='container'>
        <div>
          {/* <input className='input' type='text' placeholder='Artist/album name...' width='200' onChange={(event) => updateArtist(event.target.value)}/> */}
          <input className='input' 
                 type='text' 
                 placeholder='Artist/album name...' 
                 width='200'
                 value={props.inputValue}
                 onChange={props.inputChanged}/>
        </div>
        <div className='container has-text-centered'>
          <Link to={`/artist/${artAlb}`}> 
            <button className='button'>Search</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
}

function mapStateToProps(state){
  return {
    inputValue: state.inputValue
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    inputChanged: () => {
      console.log('changed', event.target.value)
      const action = {type: 'INPUT_CHANGE', text: event.target.value}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
