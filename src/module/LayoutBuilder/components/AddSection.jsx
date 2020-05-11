/*
 *  Copyright  (c) 2020 Knovator Technology.
 *
 *  Knovator Technology,  Inc - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 *  @author VimLeSai
 */

import React, { Component } from 'react'
import Button from '../../../common/Button'
import Card from '../../../common/Card'

class AddSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allowedToDivide: false,
      details: null,
    }
  }

  componentDidMount() {
    const { maxLevel, level } = this.props
    const { details } = this.state
    this.setState({
      allowedToDivide: level < maxLevel && !details,
    })
  }

  render() {
    const { details, allowedToDivide } = this.state
    return (
      <Card className='layout-section'>
        <Button text='Divide' show={allowedToDivide} />
        <Button text='Attach' show={!details} />
      </Card>
    )
  }
}
