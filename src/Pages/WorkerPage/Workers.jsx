import React from 'react'
import Plumber from '../../Components/Workers/Plumber'
import Painter from '../../Components/Workers/Painter'
import Electrician from '../../Components/Workers/Electrician'
import Builder from '../../Components/Workers/Builder'
const Workers = () => {
  return (
    <div>
      <Builder/>
      <Painter/>
      <Plumber/>
      <Electrician/>
    </div>
  )
}

export default Workers
