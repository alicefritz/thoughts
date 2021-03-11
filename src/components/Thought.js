import React from 'react'
import { useState, useEffect } from 'react'
import './Thought.css'
import AddComment from './AddComment'
import Button from './Button'
import Comments from './Comments'

export default function Thought({thought, index}) {
  const [addCommentOpen, setAddCommentOpen] = useState(false)
  const [commentsOpen, setCommentsOpen] = useState(false)
  const [comments, setComments] = useState([])
  const [color, setColor] = useState("");
  const [maxWidth, setMaxWidth] = useState("");
  

  const toggleAddComment = () => {
    setAddCommentOpen(!addCommentOpen)
  }

  const toggleComments = () => {
    setCommentsOpen(!commentsOpen)
  }

  const getRandomColor = () => {
    const opacity = 0.6;
    const colors = [`rgba(132, 255, 255, ${opacity})`, `rgba(179, 136, 255, ${opacity})`, `rgba(204, 255, 144, ${opacity})`, `rgba(255, 234, 0, ${opacity})`, `rgba(248, 187, 208, ${opacity})`];
    return colors[Math.floor(Math.random() * colors.length)];
  }



  useEffect(() => {
    const elements = document.querySelectorAll('.thought')
    const elementWidth = window.getComputedStyle(elements[index]).getPropertyValue('width');
    setMaxWidth(elementWidth);
    setColor(getRandomColor());
  }, [])

  return (
    <div className="thought" style={{backgroundColor: color, maxWidth: maxWidth}}>
      <h3>{thought.thinker}</h3>
      <p>{thought.thought}</p>
      <p>{thought.time.length > 10 ? thought.time.slice(0, 10) : thought.time}</p>
      <p>{comments.length ? comments.length : thought.comment_count ? thought.comment_count : 0} comments</p>
      <div className="buttons">
        <Button text={addCommentOpen ? 'Close' : 'Add comment'}  toggle={toggleAddComment}/>
        {addCommentOpen && <AddComment thought={thought} setComments={setComments} comments={comments}/>}
        {(thought.comment_count > 0 || comments.length > 0) && <Button text={commentsOpen ? 'Hide comments' : 'Show comments'} toggle={toggleComments}/>}
        {commentsOpen && <Comments ThoughtID={thought.ThoughtID} comments={comments} setComments={setComments}/>}
      </div>
      
      
    </div>
  )
}
