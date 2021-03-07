import React from 'react'
import './Comment.css'

export default function Comment({comment}) {
  return (
    <div className="comment">
      <h4>{comment.name}</h4>
      <p>{comment.comment}</p>
    </div>
  )
}
