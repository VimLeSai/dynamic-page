/*
 *  Copyright  (c) 2020 Knovator Technology.
 *
 *  Knovator Technology,  Inc - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 *  @author VimLeSai
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Card from '../../../common/Card'

const GetStarted = ({ onGetStarted }) => (
  <Card className='get-started-card'>
    <button type='button' className='get-started-btn' onClick={onGetStarted}>
      Get Started
    </button>
  </Card>
)

GetStarted.propTypes = {
  onGetStarted: PropTypes.func.isRequired,
}

export default memo(GetStarted)
