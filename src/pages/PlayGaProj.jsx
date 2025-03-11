import React from 'react'
import photo from '../assets/webpic.jpg'
import Nav from '../layouts/Nav'

const PlayGaProj = () => {
  return (
    <>
    <Nav/>
        <h1>Play Games Project</h1>
      <div style={{ display: "flex", margin: "5rem" }}>
        <div style={{ marginRight: "5rem" }}>
          <img src={ photo } alt="No photo" style={{ width: "550px", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <h2>Project Description</h2>
          <p>Name: Play Games</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illo nam ex quae neque accusamus eos repudiandae, dignissimos exercitationem tempore nemo culpa ratione magnam aliquid nihil esse pariatur voluptate id?</p>
          <p>React JS</p> 
          <p>Express JS</p> 
          <p>MongoDB</p> 
          <p>Node JS</p> 
        </div>
      </div>
    </>
  )
}

export default PlayGaProj
