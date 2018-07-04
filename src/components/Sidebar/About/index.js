import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A student who loves to eat sushi & play hockey. When not doing either of those is either found coding or designing models along with trying to run a startup. 
          <div className="emoji">
          🏒&nbsp;🍣&nbsp;🛫&nbsp;🍁&nbsp;
          </div>
        </div>
      </div>
    )
  }
}

export default About