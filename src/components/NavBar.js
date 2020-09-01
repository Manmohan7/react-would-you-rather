import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/loggedIn'
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    const { users, loggedIn, dispatch } = this.props
    const user = users[loggedIn]

    return (
      <Navbar bg='light' expand='lg' sticky='top'>
        <Navbar.Brand href='#home'>
          Would You Rather
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/'> Home </Nav.Link>
            <Nav.Link as={Link} to='/new'> New Question </Nav.Link>
            <Nav.Link as={Link} to='/leaderboard'> Leaderboard </Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Navbar.Text className='mr-3'>
              Hello, {user.name}
              <img
                className='rounded-circle ml-2'
                src={user.avatarURL}
                alt='Avatar'
                height='30'
                width='30'
              />
            </Navbar.Text>
            <Nav.Link onClick={() => dispatch(logout())}> Logout </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default connect(({ users, loggedIn }) => ({
  users,
  loggedIn
}))(NavBar)