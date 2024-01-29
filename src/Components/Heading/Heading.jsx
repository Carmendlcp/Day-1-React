import React from 'react'

const Heading = ( {heading} ) => {
  return (
    <div className="heading">
    <p> {heading.text} </p>
    <p> {heading.url} </p>
    </div>
  )
}

export default Heading
