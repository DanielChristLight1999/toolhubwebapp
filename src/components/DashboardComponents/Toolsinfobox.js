import React from 'react'

const Toolsinfobox = ({heading, count}) => {
  return (
    <div className="toolhub__dashboard-toolsmetric_container">
        <h1> {heading} </h1>
        <p> {count} </p>
    </div>
  )
}

export default Toolsinfobox