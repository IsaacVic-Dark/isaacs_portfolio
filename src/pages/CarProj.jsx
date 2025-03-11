import React from 'react'
import Nav from '../layouts/Nav'
import photo from '../assets/webpic.jpg'

const CarProj = () => {
  return (
    <>
    <Nav/>
        <h1>Car Project</h1>
      <div style={{ display: "flex", margin: "5rem" }}>
        <div style={{ marginRight: "5rem" }}>
          <img src={ photo } alt="No photo" style={{ width: "550px", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <h2>Project Description</h2>
          <p>Name: Car</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illo nam ex quae neque accusamus eos repudiandae, dignissimos exercitationem tempore nemo culpa ratione magnam aliquid nihil esse pariatur voluptate id?</p>
          <p>Php</p> 
          <p>Laravel</p> 
          <p>MySQL</p> 
        </div>
      </div>
    </>
  )
}

export default CarProj
