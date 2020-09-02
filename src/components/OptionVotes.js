import React from 'react'

export default function OptionVote(props) {
  const { option, totalVotes } = props

  return (
    <div className={
      'position-relative rounded-lg border py-2 px-3 mt-3'
      + (option.selected ? ' border-success' : '')
    }>
      {option.selected &&
        <span
          className="badge badge-success position-absolute fixed-top col-3 ml-auto"
        > Selected </span>
      }
      <div className='my-3'> Would you rather {option.text}? </div>
      <div className='bg-light border rounded-lg text-center p-1'>
        {option.votes.length} out {totalVotes.length} votes
      </div>
    </div>
  )
}
