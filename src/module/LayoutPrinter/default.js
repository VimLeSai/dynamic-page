/*
 *  Copyright  (c) 2020 Knovator Technology.
 *
 *  Knovator Technology,  Inc - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 *  @author VimLeSai
 */

import React from 'react'
import Image from './component/Image'

const TypoProps = [
  { type: 'product', component: name => <div>this is {name}</div> },
]

export const defaultTypes = {
  image: props => <Image {...props} />,
}
