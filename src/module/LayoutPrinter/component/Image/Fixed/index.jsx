import React, { memo } from 'react'
import { Flex, Box } from 'reflexbox'
import shortId from 'shortid'
import LazyImage from '../../../../LazyLoad/LasyImage'

const FixedCards = ({ web, mob, isTouchDevice }) => {
  const mappingData = isTouchDevice ? mob : web
  return (
    <Flex flexWrap='wrap' align='center'>
      {mappingData.images.map(({ title, url, link = '', alt }) => (
        <Box key={shortId.generate()} width={1 / mappingData.images_per_row}>
          <a href={link}>
            <LazyImage src={url} alt={alt} title={title} />
          </a>
        </Box>
      ))}
    </Flex>
  )
}

export default memo(FixedCards)
