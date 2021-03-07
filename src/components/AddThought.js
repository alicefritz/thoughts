import React from 'react'
import { useState } from 'react'
import './AddThought.css'

export default function AddThought({onAdd}) {

  const [thoughtText, setThoughtText] = useState('')
  const [thinker, setThinker] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({thinker, thoughtText});
    setThoughtText('');
    setThinker('');
  }

  return (
    <form className="add-thought-form" onSubmit={onSubmit}>
      <div className="add-thought-divider">
        <label htmlFor="">Name</label>
        <input type="text" 
          placeholder="Your name" 
          onChange={(e) => setThinker(e.target.value)}
          value={thinker}/>
      </div>
      <div className="add-thought-divider">
        <label htmlFor="">Thought</label>
        <input type="text" 
          placeholder="What's on your mind?" 
          onChange={(e) => setThoughtText(e.target.value)}
          value={thoughtText}/>
      </div>
      <input type="submit" value="Share your thought"/>
      
    </form>
  )
}
