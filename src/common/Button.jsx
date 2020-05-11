/*
 *  Copyright  (c) 2020 Knovator Technology.
 *
 *  Knovator Technology,  Inc - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 *  @author VimLeSai
 */

import React, { memo, useState } from 'react'
import { Transition } from 'react-transition-group'
import cx from 'classnames'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1, zoom: 1.2 },
  entered: { opacity: 1, zoom: 1.01 },
  exiting: { opacity: 0.75, zoom: 1 },
  exited: { opacity: 0.75, zoom: 1 },
}

function Button({
  show = true,
  text,
  className = '',
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [inProp, setInProp] = useState(false)
  if (show) {
    return (
      <Transition in={inProp} timeout={500}>
        {state => (
          <button
            type={type}
            className={cx('layout-builder-btn', className)}
            onMouseOver={() => setInProp(true)}
            onMouseOut={() => setInProp(false)}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
              ...style,
            }}
            {...rest}
          />
        )}
      </Transition>
    )
  }
  return null
}

export default memo(Button)
