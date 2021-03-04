import React from 'react'
import './Thought.css'

export default function Thought({thought}) {

  console.log(thought)
  return (
    <div className="thought">
      <h3>{thought.thinker}</h3>
      <p>{thought.thought}</p>
      <p>{thought.time}</p>
    </div>
  )
}
