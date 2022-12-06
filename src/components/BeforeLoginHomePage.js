import { Button, Grid , Box } from "@mui/material";
import React from "react";
import "../Css/HomePage.css";
const BeforeLoginHomePage = () => {
  return (
    <>
      <div className="image">
       
          <Grid
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
          </Grid>
      </div>
    </>
  );
};

export default BeforeLoginHomePage;
