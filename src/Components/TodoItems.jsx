import React, { Component } from 'react'
import { Content } from 'reactbulma'

class Todo extends Component {
  constructor () {
    super ()
  }
  render () {
    return (
      <Content style={styles.content}>
        <div className="toggle" style={styles.toggle}>
          <input type="checkbox" checked={true} name="d" id="v" />
        </div>
        <div className="todo_item" style={styles.item}>
          sdgsf
        </div>
        <div className="destroy" style={styles.destroy}>
          X
        </div>
      </Content>
    )
  }

}


const styles = {
  content: {
    display: 'flex',
    flexDirection: 'row'
  },
  toggle: {
    marginRight: '20px',
  },
  destroy: {
    position: 'fixed',
    right: '5%'
  }
}


export default Todo