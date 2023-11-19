import React from 'react'
import { Link } from "react-router-dom";
import "./experience.css"

const experience = () => {
  return (
    <div id='buttons'>
      <Link to= "/kenna" class ="link"><button class='button'><img src="kenna_logo.jpg" alt="Kenna logo" id='kenna-logo'/> <h3>Kenna</h3>Customer First Thinking</button></Link>
    </div>
  )
}

export default experience