import { Box, Button, Grid } from '@mui/material'
import React from 'react'

const BeforeLoginHomePage = () => {
  return (
    <>
      <div>
        <img
          src="./images/bHome.jpg"
          alt=""
          srcset=""
          style={{ width: "100%" }}
        />
      </div>
      <Grid container justifyContent={"center"} >
        <Grid item lg={4} md={4} sm={6} xs={12} >
          <div className="features-row">
            <img
              src="../images/class.png"
              alt="classRoom"
              className="underOneRoof"
            />
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

        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12} >
          <div className="features-row">
            <img
              src="../images/class.png"
              alt="classRoom"
              className="underOneRoof"
            />
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

        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12} >
          <div className="features-row">
            <img
              src="../images/class.png"
              alt="classRoom"
              className="underOneRoof"
            />
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

        </Grid>
      </Grid>
    </>
  );
}

export default BeforeLoginHomePage