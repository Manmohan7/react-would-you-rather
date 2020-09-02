import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import OptionVotes from './OptionVotes'

class Question extends Component {
  state = {
    selectedVal: ''
  }

  updateSelection = (e) => {
    const selectedVal = e.currentTarget.value
    this.setState(() => ({
      selectedVal
    }))
  }

  submitAnswer = (e) => {
    e.preventDefault();
  }

  render() {
    const { question, author, loggedIn } = this.props

    const optionOne = {
      ...question.optionOne,
      selected: question.optionOne.votes.includes(loggedIn)
    }
    const optionTwo = {
      ...question.optionTwo,
      selected: question.optionTwo.votes.includes(loggedIn)
    }
    const totalVotes = [...optionOne.votes, ...optionTwo.votes]
    const isAnswered = totalVotes.includes(loggedIn)


    const title = 'Would you rather'

    return (
      <div className='row'>
        <div className='col-6 mx-auto my-5'>
          <Card>
            <Card.Header as='h4'> {author.name} asks: </Card.Header>
            <Card.Body className='d-flex'>
              <div className='col-5 text-center border-right'>
                <img
                  src={author.avatarURL}
                  alt={author.name}
                  height='150'
                  width='150'
                  className='rounded-circle'
                />
              </div>

              {
                isAnswered
                  ? <div className='col-7'>
                    <h5> Results: </h5>

                    <OptionVotes
                      option={optionOne}
                      totalVotes={totalVotes}
                    />

                    <OptionVotes
                      option={optionTwo}
                      totalVotes={totalVotes}
                    />
                  </div>
                  : <div className='col-7'>
                    <h5 className='mb-3 text-capitalize'> {title} </h5>

                    <form onSubmit={this.submitAnswer}>
                      <div className='form-check'>
                        <label className='form-check-label my-2'>
                          <input
                            type='radio'
                            className='form-check-input'
                            name='questionPoll'
                            value='optionOne'
                            checked={this.state.selectedVal === 'optionOne'}
                            onChange={this.updateSelection}
                          />
                          {optionOne.text}
                        </label>
                      </div>

                      <div className='form-check'>
                        <label className='form-check-label my-2'>
                          <input
                            type='radio'
                            className='form-check-input'
                            name='questionPoll'
                            value='optionTwo'
                            checked={this.state.selectedVal === 'optionTwo'}
                            onChange={this.updateSelection}
                          />
                          {optionTwo.text}
                        </label>
                      </div>

                      <input
                        type='submit'
                        className='btn btn-primary form-control'
                        disabled={this.state.selectedVal === ''}
                      />
                    </form>
                  </div>
              }
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

function mapStoreToProps({ questions, users, loggedIn }, props) {
  const question = questions[props.match.params.id]
  const author = users[question.author]

  return {
    question,
    author,
    loggedIn
  }
}

export default connect(mapStoreToProps)(Question)