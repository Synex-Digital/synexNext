import React from 'react'

const BgGlowEffect = ({className}) => {
  return (
    <div className={`${className} glow w-10 h-10 rounded-full bg-primary shadow-glow -z-10 opacity-20 absolute`}/>
  )
}

export default BgGlowEffect