import React from 'react'
import { useState } from 'react'
import './AddThought.css'

export default function AddThought({onAdd}) {

  const [thoughtText, setThoughtText] = useState('')
  const [thinker, setThinker] = useState('')

  const getCurrentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const today = getCurrentDate();
    onAdd({thinker, thoughtText, today});
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
