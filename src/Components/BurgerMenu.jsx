import React, { Component } from 'react'
import { elastic as Menu } from 'react-burger-menu'
// import {
//   Link
// } from 'react-router-dom'



class BurgerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    var isMenuOpen = function (state) {
      console.log(isMenuOpen)
      return state.isOpen
    }
    return (
      <Menu 
        styles={styles}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}>
        {/* <Link to='/' id="home" className="menu-item"
          onClick={() => this.closeMenu()}>Home</Link>
        <br />
        <Link id="about" className="menu-item" to='/about/me' onClick={() => this.closeMenu()}>About</Link> */}
      </Menu>
    );
  }
}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}



export default BurgerMenu