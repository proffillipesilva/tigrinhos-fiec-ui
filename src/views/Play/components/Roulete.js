import React from 'react'
import PropTypes from 'prop-types'

import "./roulette.css"

function Roulete(props) {
  return (
    <div class="compsoul-body" >
   
  <label class="compsoul-roulette-label" for="compsoul-roulette-checkbox"></label>
  <div class="compsoul-roulette" >
    <ul class="roulette-list" style={props.animState}>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">GO TO WORK</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
      <li class="roulette-item">Go for a beer</li>
    </ul>
    <div class="roulette-marker"></div>
  </div>
</div>
  )
}

Roulete.propTypes = {}

export default Roulete
