import React, { PureComponent } from 'react'

class LazyImage extends PureComponent {
  constructor(props) {
    super(props)
    this.imgRef = React.createRef()
  }

  componentDidMount() {
    const { src } = this.props
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { isIntersecting } = entry
          if (isIntersecting) {
            this.imgRef.src = src
            this.observer = this.observer.disconnect()
          }
        })
      },
      {
        root: document.querySelector('.__next'),
        rootMargin: '0px 0px 200px 0px',
      }
    )
    this.observer.observe(this.imgRef)
  }

  render() {
    const { src, alt, ...rest } = this.props
    // eslint-disable-next-line no-return-assign
    return <img {...rest} ref={r => (this.imgRef = r)} alt={alt} />
  }
}

export default LazyImage
