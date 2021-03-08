import React from 'react'
import './Button.css'

export default function Button({text, toggle, color}) {
  return (
    <button onClick={toggle} style={{backgroundColor:color}}>
      {text}
    </button>
  )
}
