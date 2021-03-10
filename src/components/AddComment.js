import React from 'react'
import {useState} from 'react'
import Comments from './Comments'

export default function AddComment({thought, setComments, comments}) {
  const [commentName, setCommentName] = useState('')
  const [commentText, setCommentText] = useState('')

  const addNewComment = (comment) => {
    fetch('https://af-thoughts-api.herokuapp.com/comments',
    {
      method:'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body:JSON.stringify({
        name: comment.name,
        comment: comment.comment,
        ThoughtID: comment.ThoughtID
      })
    })
    .then(response => response.json())
    .then(data => {
      setComments([...comments, data])
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addNewComment({name: commentName, comment: commentText, ThoughtID: thought.ThoughtID});
    setCommentName('');
    setCommentText('');
  }
  return (
    <div className="add-comment">
        <form className="add-comment-form" onSubmit={onSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" 
            onChange={(e) => setCommentName(e.target.value)}
            value={commentName}/>
          <label htmlFor="">Comment</label>
          <input type="text" 
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
            />
          <input type="submit" value="Make comment"/>
        </form>
      </div>
  )
}
