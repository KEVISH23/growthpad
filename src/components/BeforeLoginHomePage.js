import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../Css/HomeForAll.css";
const BeforeLoginHomePage = () => {
  return (
    <>
      <div className="image2">
        <img
          src="./images/bHome.jpg"
          alt=""
          srcSet=""
          style={{ width: "100%" }}
        />
        <div className="centered">
          <Typography
            fontFamily={"Montserrat, sans-serif"}
            sx={{
              fontSize: {
                lg: "4rem",
                md: "4rem",
                sm: "3rem",
                xs: "2rem",
              },
            }}
          >
            Join Us As
          </Typography>
        </div>
        <Box sx={{ mt: { xs: "1rem" } }} className="centeredButtons">
          <Grid
            container
            direction={{
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            }}
            className="typoJoinus"
            spacing={{
              lg: 10,
              md: 10,
              sm: 4,
              xs: 2,
            }}
          >
            <Grid item>
              <Link to="/teacher" style={{textDecoration:"none"}} >
                <Button
                  sx={{
                    fontSize: {
                      lg: "xx-large",
                      md: "x-large",
                      sm: "large",
                      xs: "medium",
                    },
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Teacher
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="student" style={{textDecoration:"none"}} >
                <Button
                  sx={{
                    fontSize: {
                      lg: "xx-large",
                      md: "x-large",
                      sm: "large",
                      xs: "medium",
                    },
                  }}
                  variant="outlined"
                  color="secondary"
                >
                  Student
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Grid container justifyContent={"center"}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <div className="features-row">
            <img
              src="../images/class.png"
              alt="classRoom"
              className="underOneRoof"
            />
            <h3 className="joinusas">Everything under one roof</h3> <br />
            {
              <p className="joinusas">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                malesuada fames ac turpis egestas sed. Malesuada fames ac turpis
                egestas maecenas.
              </p>
            }
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <div className="features-row">
            <img
              src="../images/rupi.png"
              alt="classRoom"
              className="underOneRoof"
            />
            <h3 className="joinusas">Fees Payment</h3> <br />
            {
              <p className="joinusas">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                malesuada fames ac turpis egestas sed. Malesuada fames ac turpis
                egestas maecenas.
              </p>
            }
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <div className="features-row">
            <img
              src="../images/easy.png"
              alt="classRoom"
              className="underOneRoof"
            />
            <h3 className="joinusas">Easy to use</h3> <br />
            {
              <p className="joinusas">
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
};

export default BeforeLoginHomePage;
