import React from 'react'
import './Thought.css'

export default function Thought({thought}) {

  return (
    <div className="thought">
      <h3>{thought.thinker}</h3>
      <p>{thought.thought}</p>
      <p>{thought.time ? thought.time.slice(0, -14) : 'just now'}</p>
      <p>{thought.comment_count ? thought.comment_count : 0} comments</p>
    </div>
  )
}
