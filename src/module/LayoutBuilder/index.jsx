import PropTypes from 'prop-types'
import React from 'react'
import Builder from './components/Builder'
import { ternary } from '../../helper'
import GetStarted from './components/GetStarted'

class LayoutBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: [],
    }
  }

  getStarted = () => {
    this.setState({
      layout: [{}],
    })
  }

  render() {
    const { layout = [] } = this.state
    const { types, maxLevel } = this.props
    return (
      <div className='layout-builder'>
        {ternary(!layout.length, <GetStarted onGetStarted={this.getStarted} />)}
        <Builder layout={layout} types={types} maxLevel={maxLevel} />
      </div>
    )
  }
}

LayoutBuilder.defaultProps = {
  maxLevel: 1,
  layout: [],
  readyOnly: false,
}

LayoutBuilder.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      description: PropTypes.string,
      help: PropTypes.string,
    })
  ).isRequired,
  maxLevel: PropTypes.number,
  layout: PropTypes.object,
  saveLayout: PropTypes.func,
  readyOnly: PropTypes.bool,
  onChange: PropTypes.func,
}

export default LayoutBuilder
