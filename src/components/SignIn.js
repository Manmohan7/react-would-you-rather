import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
  state = {
    user: ''
  }

  updateUser = (event) => {
    this.setState(() => ({
      user: event.target.value
    }))
  }

  loginUser = (e) => {
    e.preventDefault();

    // todo: set selected user as logged in
    // and redirect to homepage
  }

  render() {
    const { user } = this.state

    return (
      <div className='row justify-content-center'>
        <div className='col-8'>
          <div className='card'>
            <div className='card-header text-center'>
              <h3>Welcome to Would You Rather App!</h3>
              <span>Please sign in to continue</span>
            </div>

            <form className='card-body' onSubmit={this.loginUser}>
              <div className='form-group'>
                <select className='form-control'
                  value={user}
                  onChange={(event) => this.setState({ user: event.target.value })}
                >
                  <option value='' disabled>Select a user</option>


                  <option value='manmohan'> Manmohan </option>
                </select>
              </div>

              <button className='btn btn-primary form-control' type='submit'> Sign In </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({ users }) => ({
  users
}))(SignIn)