import React from 'react'
import PropTypes from 'prop-types'
import { ClipLoader } from 'react-spinners'

const override = {
    display: "block",
    position: 'relative',
    top: "50%",
    margin: "0 auto",
    borderColor: "red",
  };

function MyLoading(props) {
  return (
    <ClipLoader
        color={props.color || 'red'}
        loading={props.loading}
        cssOverride={props.override || override}
        size={props.size || 150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

MyLoading.propTypes = {}

export default MyLoading
