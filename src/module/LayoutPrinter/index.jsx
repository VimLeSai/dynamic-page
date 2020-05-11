/*
 *  Copyright  (c) 2020 Knovator Technology.
 *
 *  Knovator Technology,  Inc - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 *  @author VimLeSai
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortId from 'shortid'
import { Router } from 'react-router-dom'
import { isTouchDevice } from '../../helper'
import Printer from './Printer'
import '../../css/layout-printer.css'
import { defaultTypes } from './default'
import { IDetailsType } from './types'

class LayoutPrinter extends Component {
  /**
   * This function will override object that has same type with incoming props and mere both types.
   * @return: modified object of types
   * */
  static typesModifier = types => {
    // const lastedDefaultType = []
    // types.map(x => {
    //   const similarType = defaultTypes.find(y => y.type === x.type)
    //   if (!similarType) {
    //     lastedDefaultType.push(similarType)
    //   }
    //   return x
    // })
    return { ...defaultTypes, ...types }
  }

  constructor(props) {
    super(props)
    this.state = {
      isTouchDevice: true,
    }
  }

  /**
   * update type of device and modify types for page in state
   * @return: null
   * */
  componentDidMount() {
    const { types = [] } = this.props
    this.setState(
      {
        isTouchDevice: isTouchDevice(),
        types: LayoutPrinter.typesModifier(types),
      },
      () => console.log('ddfs', this.state)
    )
  }

  // no use for now
  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.layout) !== JSON.stringify(prevState.layout)) {
      return {
        layout: nextProps.layout,
      }
    }
    return null
  }

  render() {
    const { layout = [] } = this.props
    const { isTouchDevice: isMobile, types } = this.state
    return (
      layout.map(x => {
        return (
          <Printer
            key={shortId.generate()}
            {...x}
            types={types}
            isTouchDevice={isMobile}
          />
        )
      }) || null
    )
  }
}

// LayoutPrinter.defaultProps = {
//   types: {},
// }
//
// LayoutPrinter.propTypes = {
//   layout: PropTypes.array.isRequired,
//   types: PropTypes.shape({
//     [PropTypes.string]: PropTypes.func.isRequired,
//   }),
// }

export default LayoutPrinter
