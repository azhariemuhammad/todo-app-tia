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

import TodoItems from './TodoItems'

class List extends Component {
  constructor () {
    super () 
  }


  render () {
    return (
      <div>
        <Card>
          <Card.Content>
            <Content style={styles.content}>
             <TodoItems />
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
  }
}

export default List


