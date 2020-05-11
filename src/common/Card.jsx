/*
 *  Copyright  (c) 2020 Knovator Technology.
 *
 *  Knovator Technology,  Inc - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 *  @author VimLeSai
 */

import React from 'react'
import cx from 'classnames'

const Card = ({ children, className }) => {
  return <div className={cx('layout-card', className)}>{children}</div>
}

export default Card
