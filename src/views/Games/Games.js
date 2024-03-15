import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Games(props) {
  return (
    <div>
      <ul>
      <li><Link to={"1"}>21</Link></li>
      <li><Link to={"2"}>Poker</Link></li>
    </ul>
      </div>
  )
}


export default Games
