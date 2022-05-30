import React from 'react'

interface Iprops {
    title: String
}

const footer:React.FC<Iprops>=({title}):React.ReactElement=> {
  return (
    <div>{title}</div>
  )
}

export default footer