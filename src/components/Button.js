import React from 'react'

export default function Button({text, toggle}) {
  return (
    <button onClick={toggle}>
      {text}
    </button>
  )
}
