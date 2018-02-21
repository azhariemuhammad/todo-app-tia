import React, { Component } from 'react'

import InputField from './InputField'
import ListTodos from './ListTodos'

class MainContent extends Component {
  constructor () {
    super () 

  }

  render () {
    return (
      <div className="main_content" style={styles.container}>
        <InputField />
        <ListTodos />
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