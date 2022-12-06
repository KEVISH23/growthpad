import { Button, Grid, Box, Typography, Stack } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";
import "../Css/HomePage.css";
const BeforeLoginHomePage = () => {
  return (
    <>
      <div className="image">

        {/* <Grid
            sx={{ height: "auto" }}
            container
            // spacing={4}
            justifyContent={"center"}
            alignItems={"center"}
            className="buttonClass"
          >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <p className="joinusas">Join Us As</p>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Button
                sx={{
                  backgroundColor: "#588A67",
                  "&:hover": {
                    backgroundColor: "#487054",
                  },
                }}
                variant="contained"
              >
                Teacher
              </Button>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Button
                sx={{
                  border: "1px solid #588A67",
                  color: "#588A67",
                  "&:hover": {
                    border: "1px solid #588A67",
                  },
                }}
                variant="outlined"
              >
                Student
              </Button>
            </Grid>
          </Grid> */}
        <Grid container justifyContent="center" align="center">
          <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
            <Box sx={{
              width: "auto",
              height: "100vh",
            }} >
              <Grid container justifyContent="center" align="center">
                <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                  <Typography sx={{
                    color: "#588A67", marginTop: {
                      lg: 15,
                      md: 10,
                      sm: 5,
                      xs: 5
                    }, fontSize: {
                      lg: "3rem",
                      md: "3rem",
                      sm: "3rem",
                      xs: "2rem"
                    },
                    marginBottom: {
                      lg: 13,
                      md: 10,
                      sm: 2,
                      xs: 2
                    }
                  }} variant="h3" >
                    <p className="joinusas">Join Us As</p>
                  </Typography>
                </Grid>
                <Grid container justifyContent="center" align="center">
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={10}
                    className="buttonClass"
                  >
                    <Grid container spacing={{
                      lg:10,
                      md:10,
                      sm:2,
                      xs:2
                    }}>
                      <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                        <Button
                          sx={{
                            backgroundColor: "#588A67",
                            "&:hover": {
                              backgroundColor: "#487054",
                            },fontSize:{
                              lg:"30px",
                              md:"20px",
                              sm:"15px",
                              xs:"15px"
                            }
                          }}
                          variant="contained"
                          size="large"
                        >
                          Teacher
                        </Button>
                      </Grid>
                      <Grid item lg={6} md={6} xl={6} sm={12} xs={12}>
                        <Button
                          sx={{
                            border: "1px solid #588A67",
                            color: "#588A67",
                            "&:hover": {
                              border: "1px solid #588A67",
                            },fontSize:{
                              lg:"30px",
                              md:"20px",
                              sm:"15px",
                              xs:"15px"
                            }
                          }}
                          variant="outlined"
                          size="large"
                        >
                          Student
                        </Button>
                      </Grid>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default BeforeLoginHomePage;
