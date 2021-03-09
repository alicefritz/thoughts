import React from 'react'
import { useState } from 'react'
import './Thought.css'
import AddComment from './AddComment'
import Button from './Button'
import Comments from './Comments'

export default function Thought({thought}) {
  const [addCommentOpen, setAddCommentOpen] = useState(false)
  const [commentsOpen, setCommentsOpen] = useState(false)
  const [comments, setComments] = useState([])
  

  const toggleAddComment = () => {
    setAddCommentOpen(!addCommentOpen)
  }

  const toggleComments = () => {
    console.log('hello')
    setCommentsOpen(!commentsOpen)
  }

  console.log(comments.length)

  return (
    <div className="thought">
      <h3>{thought.thinker}</h3>
      <p>{thought.thought}</p>
      <p>{thought.time.length > 10 ? thought.time.slice(0, 10) : thought.time}</p>
      <p>{comments.length ? comments.length : thought.comment_count ? thought.comment_count : 0} comments</p>
      <div className="buttons">
        {(thought.comment_count > 0 || comments.length > 0) && <Button text={commentsOpen ? 'Hide comments' : 'Read comments'} toggle={toggleComments}/>}
        <Button text={addCommentOpen ? 'Close' : 'Add comment'}  toggle={toggleAddComment}/>
      </div>
      {addCommentOpen && <AddComment thought={thought} setComments={setComments} comments={comments}/>}
      {commentsOpen && <Comments ThoughtID={thought.ThoughtID} comments={comments} setComments={setComments}/>}
      
    </div>
  )
}
