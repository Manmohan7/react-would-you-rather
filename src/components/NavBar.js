import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/loggedIn'

class NavBar extends Component {
  logout = () => {
    console.log('logout clicked')

    this.props.dispatch(logout())
  }

  render() {
    const { users, loggedIn } = this.props
    const user = users[loggedIn]

    return (
      <nav className='navbar navbar-expand-md navbar-light bg-light sticky-top'>

        <Link
          className='navbar-brand'
          to='/'
        >
          Would You Rather
        </Link>

        <div className='navbar-nav'>
          <Link className='nav-link' to='/'> Home </Link>
          <Link className='nav-link' to='/'> New Question </Link>
          <Link className='nav-link' to='/leaderboard'> Leaderboard </Link>
        </div>

        <div className='navbar-nav ml-auto'>
          <div className='nav-link mr-2 disabled'>
            <span> Hello, {user.name} </span>
              <img
                className='rounded-circle ml-1'
                src={user.avatarURL}
                alt='Avatar'
                height='30'
                width='30'
              />
          </div>
          <span className='nav-link my-auto cursor-pointer' onClick={this.logout}> Logout </span>
        </div>
      </nav>
    )
  }
}

export default connect(({ users, loggedIn }) => ({
  users,
  loggedIn
}))(NavBar)