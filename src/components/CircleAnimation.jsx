import React from 'react'

const CircleAnimation = (props) => {
  return (
    <div className={`bg-[#ffffff31] w-10 h-10 rounded-full ${props.y} ${props.x} absolute circle__animation`} />
  )
}

export default CircleAnimation