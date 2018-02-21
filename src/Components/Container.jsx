import React, { Component } from 'react'

import MainContent from './MainContent'
import Header from './Header'

class Container extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="Container">
        <Header />
        <MainContent />
      </div>
    )
  }
}


export default Container
