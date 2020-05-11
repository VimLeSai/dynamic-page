/*
 *  Copyright  (c) 2020 Knovator Technology.
 *
 *  Knovator Technology,  Inc - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 *  @author VimLeSai
 */

import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../../common/Card'

class Builder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { layout } = this.props
    return (
      <>
        {layout.map((x, i) => (
          <Card key={i} {...x} />
        ))}
      </>
    )
  }
}

Builder.propsTypes = {}

export default Builder
