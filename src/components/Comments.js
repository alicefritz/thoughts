import React from 'react'
import {useEffect, useState} from 'react'
import Comment from './Comment'

export default function Comments({ThoughtID, comments, setComments}) {

  useEffect(() => {
    fetch(`https://af-thoughts-api.herokuapp.com/comments/${ThoughtID}`)
    .then(res => res.json())
    .then(data => {
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
