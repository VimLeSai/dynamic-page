/*
 *  Copyright  (c) 2020 Knovator Technology.
 *
 *  Knovator Technology,  Inc - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 *  @author VimLeSai
 */

import PropTypes from 'prop-types'

export const IImageType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
})

export const IDetailsImageObj = PropTypes.shape({
  autoplay: PropTypes.bool,
  images_per_row: PropTypes.number,
  images: PropTypes.arrayOf(IImageType),
})

export const IDetailsType = PropTypes.objectOf({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired
