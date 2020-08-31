import React, { Component } from 'react';
import { connect } from 'react-redux'

import { handleInitialRequest } from '../actions/shared'

import SignIn from './SignIn';
import HomePage from './HomePage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialRequest())
  }

  render() {
    return (
      <div className="container">
        {
          this.props.loggedIn
            ? <HomePage />
            : <SignIn />
        }

      </div>
    )
  }
}

export default connect(({ loggedIn }) => ({
  loggedIn
}))(App)