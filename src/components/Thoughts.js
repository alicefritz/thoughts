import React from 'react'
import Thought from './Thought'
import Button from './Button'
import './Thoughts.css'



export default function Thoughts() {
  const thoughts = [{thinker: 'alice', thought: 'today is a good day', id: 0, time: '2021-03-04 15:30'},
                  {thinker: 'alice', thought: 'will tomorrow be a good day?', id: 1, time:'2021-03-04 15:42'},
                  {thinker: 'alice', thought: 'yesterday was okay after all', id: 2, time: '2021-03-04 15:51'}]
  return (
    <div className="thoughts">
      <Button text='new thought'/>
      {thoughts.map(thought => {
        return <Thought key={thought.id} thought={thought}/>
      })}
    </div>
  )
}
