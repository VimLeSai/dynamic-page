import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slick from 'react-slick'
import shortId from 'shortid'
import 'slick-carousel/slick/slick-theme.css'
// Import css files
import 'slick-carousel/slick/slick.css'
import LazyImage from '../../../../LazyLoad/LasyImage'

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Slider = ({ isTouchDevice, web, mob, config = {} }) => {
  const [settings, setSettings] = useState({})
  const mappingData = isTouchDevice ? mob : web

  useEffect(() => {
    setSettings({
      ...defaultSettings,
      ...config,
      slidesToShow: mappingData.images_per_row,
      rows: 1,
    })
  }, [])

  return (
    <Slick {...settings}>
      {mappingData.images.map(({ title, url, link = '', alt }) => {
        return (
          <a key={shortId.generate()} href={link}>
            <LazyImage src={url} alt={alt} title={title} />
          </a>
        )
      })}
    </Slick>
  )
}

export default memo(Slider)
