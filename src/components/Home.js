import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function Home(props) {

  const artAlb = props.inputValue
  const currentSong = props.currentSong

  return <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
        <div className='container'>
        <div className='container homepage-container'>
          <input 
            className='input' 
            type='text' 
            placeholder='Artist name...' 
            width='200'
            value={props.inputValue}
            onChange={props.inputChanged}
            onKeyDown={(event) => {
              if (event.key == 'Enter') {
                props.history.push(`/project_2/artist/${artAlb}`)
            }}} 
          />
        </div>
        <div className='container has-text-centered'>
          <Link to={`/project_2/artist/${artAlb}`}> 
            <button className='button'>Search</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
}

function mapStateToProps(state){
  return {
    inputValue: state.inputValue,
    currentSong: state.currentSong
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    inputChanged: () => {
      const action = {type: 'INPUT_CHANGE', text: event.target.value}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
