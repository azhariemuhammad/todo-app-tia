import React, { Component } from 'react'

import InputField from './InputField'
import List from './ListTodos'

class MainContent extends Component {
  constructor () {
    super () 

  }

  render () {
    return (
      <div className="main_content" style={styles.container}>
        <InputField />
        <List />
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    margin: '0 auto'
  }
}

export default MainContent