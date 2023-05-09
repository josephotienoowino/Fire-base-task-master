import React from 'react'

type button = {
    text:string;
}

const Button = ({text}:button) => {
  return (
    <button>{text}</button>
  )
}

export default Button