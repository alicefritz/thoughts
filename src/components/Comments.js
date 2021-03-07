import React from 'react'
import {useEffect, useState} from 'react'
import Comment from './Comment'

export default function Comments({ThoughtID}) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/comments/${ThoughtID}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setComments(data)
    })
  }, [])


  return (
    <div>
      {comments.map(comment => {
        return <Comment key={comment.id} comment={comment}/>
      })}
    </div>
  )
}
