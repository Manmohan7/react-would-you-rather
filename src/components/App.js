import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import { handleInitialRequest } from '../actions/shared'

import SignIn from './SignIn';
import HomePage from './HomePage'
import NavBar from './NavBar';
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialRequest())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />

        <div className="container">
          {
            this.props.loading
              ? this.props.loggedIn
                ? <NavBar />
                : <SignIn />
              : null
          }

        </div>
      </Fragment>
    )
  }
}

export default connect(({ loggedIn, users, questions }) => ({
  loggedIn,
  loading: Object.keys(users).length && Object.keys(questions).length
}))(App)