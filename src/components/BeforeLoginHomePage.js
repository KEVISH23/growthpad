import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import "../Css/HomePage.css"
const BeforeLoginHomePage = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <img className="image" src="./images/bHome.jpg" alt="" />
        </Grid>
      </Grid>
    </>
  );
}

export default BeforeLoginHomePage