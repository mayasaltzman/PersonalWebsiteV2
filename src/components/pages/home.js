import React from 'react'
import "./home.css"

const home = () => {
  return (
    <div>
      <div id='header'>
        <span id='wave'>&#128075;</span>
        <h1>Hello World!</h1>
      </div>
      <div id='body'>
        <p>I am currently a third year <span id='cs'>Computer Science Honors Co-op</span> student at the <span id='uni'>University of Guelph.</span> I most recently spent an eight month co-op work term at <span id='kenna'>Kenna</span> in the Data Management Department. I am passionate about environmentally sustainable tech. I enjoy learning about combining tech and ethics! <br /><br />
          I am the <span id='pres'>President</span> of the <span id='GCC'>Guelph Coding Community </span>and love my computing community.
          <br /><br />I like to spend my free time in nature or reading. You can find me camping and going on hikes. Over the years I have spent a total of 90 days in the woods.
          I collect vinyls and recently have been enjoying trying out new vegan recipes. <br /><br />I’m inspired by people who want to make the tech industry more inclusive! If this sounds like you, lets chat! <a href="https://github.com/mayasaltzman"><i id="socials" class="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/maya-saltzman/"><i id="socials" class="fa fa-linkedin"></i></a></p>
        <img id="pfp" src='./PersonalWebsiteV2/profilephoto.png' alt='maya' />
      </div>


    </div>
  )
}

export default home