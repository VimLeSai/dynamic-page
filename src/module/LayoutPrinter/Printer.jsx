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
import { Box, Flex } from 'reflexbox'
import shortId from 'shortid'
import { IDetailsType } from './types'

const Printer = ({ details, child, isTouchDevice, types, index }) => {
  if (details) {
    console.log('inside', { index, details, types })
    return types?.[details.type]({ ...details, isTouchDevice }) || null
  }

  if (child) {
    console.log('child---', { child })

    return (
      <Flex>
        {child.map(x => {
          if (x.child) {
            return (
              <Box
                key={shortId.generate()}
                width={1 / (child.length * x.length)}>
                is has soe=me child
                {/* <Printer */}
                {/*  {...x} */}
                {/*  index={i} */}
                {/*  types={types} */}
                {/*  isTouchDevice={isTouchDevice} */}
                {/* /> */}
              </Box>
            )
          }
          return (
            <Box width={1 / child.length}>
              {types?.[x.details.type]({ ...x, isTouchDevice })}
            </Box>
          )
        })}
      </Flex>
    )
  }

  return null
}

// Printer.defaultProps = {
//   details: null,
//   child: null,
// }

// Printer.propTypes = {
//   details: IDetailsType,
//   child: PropTypes.arrayOf(IDetailsType),
// }

export default Printer
