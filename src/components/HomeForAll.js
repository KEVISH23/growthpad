import { Button } from '@mui/material';
import React from 'react'
import "../Css/HomeForAll.css";

const HomeForAll = () => {
  return (
    <>
    <div>
        <div className="img-fluid homeBack">
            <div className="row">
                <div className="col">
                    <Button type="button" className="btn btn-xl btn-success">Teacher</Button>
                </div>
                <div className="col">
                    <Button className="btn btn-xl btn-outline-success">Student</Button>
                </div>
            </div>
        </div>
        </div>
        <div className="features container">
        <h2>Features</h2>

        <div className="features-row">
          <img src="../images/class.png" alt="classRoom" className="underOneRoof"/>
          <h3>Everything under one roof</h3>
          {
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              malesuada fames ac turpis egestas sed. Malesuada fames ac turpis
              egestas maecenas.
            </p>
          }
        </div>

        <div className="features-row">
          <img src="../images/class.png" alt="classRoom" className="fees"/>
          <h3>Online fees payment</h3>
          {
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              malesuada fames ac turpis egestas sed. Malesuada fames ac turpis
              egestas maecenas.
            </p>
          }
        </div>

        <div className="features-row">
          <img src="../images/class.png" alt="classRoom" className="materials"/>
          <h3>Materials section for students</h3>
          {
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              malesuada fames ac turpis egestas sed. Malesuada fames ac turpis
              egestas maecenas.
            </p>
          }
        </div>
      </div>
    </>
    
  )
}

export default HomeForAll