import React, { Component } from 'react'

import { 
  Card,
  Header,
  Title,
  Icon,
  Content,
  Footer,
  Item,
  Input
} from 'reactbulma'

class Todo extends Component {
  constructor () {
    super () 
  }


  render () {
    return (
      <div>
        <Card>
          <Card.Content>
            <Content style={styles.content}>
              <div className="toggle" style={styles.toggle}>
                <input type="checkbox" checked={true} name="d" id="v"/>
              </div>
              <div className="todo_item" style={styles.item}>
                sdgsf
              </div>
              <div className="destroy" style={styles.destroy}>
                X
              </div>
            </Content>

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

            
          </Card.Content>
        </Card>
      </div>
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


