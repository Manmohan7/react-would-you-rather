import React, { Component } from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {
  render() {
    const { users, loggedIn } = this.props
    const user = users[loggedIn]

    return (
      <nav className='navbar navbar-expand-md navbar-light bg-light sticky-top'>
        <a className='navbar-brand' href='/'>
          Would You Rather
          </a>

        <ul className='navbar-nav'>
        <li className='nav-item'>
            <a className='nav-link' href='/'>
              Home
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href='/'>
              New Question
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Leaderboard
            </a>
          </li>
        </ul>

        <ul className='navbar-nav ml-auto'>
          <li className='nav-item mr-2'>
            <a className='nav-link' href='/'>
              <span> Hello, {user.name} </span>
              <img
                className='rounded-circle ml-1'
                src={user.avatarURL}
                alt='Avatar'
                height='30'
                width='30'
              />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
            Logout
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default connect(({ users, loggedIn }) => ({
  users,
  loggedIn
}))(NavBar)