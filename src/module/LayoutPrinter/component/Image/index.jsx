import React, { memo } from 'react'
import PropTypes from 'prop-types'
import FixedCards from './Fixed'
import Slider from './Slider'

const Image = ({ image_type: imageType, ...other }) => {
  console.log('sagte 3', { imageType, other })
  switch (imageType) {
    case 'card-slider':
      return <Slider {...other} />
    case 'card-fixed':
      return <FixedCards {...other} />
    default:
      return <div>no type found</div>
  }
}

// Image.propTypes = {
//   image_type: PropTypes.string.isRequired,
// }

export default Image
