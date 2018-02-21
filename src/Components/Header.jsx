import React, { Component } from 'react'
import { 
  Hero,
  Container,
  Title,
} from 'reactbulma'

import BurgerMenu from './BurgerMenu.js'

class Header extends Component {

  render () {
    return (
      <div className="Header">
        <BurgerMenu />
        <Hero info>
          <Hero.Body>
            <Container>
              <Title>
                todos
              </Title>
            </Container>
          </Hero.Body>
        </Hero>
      </div>
    )
  }
}



export default Header