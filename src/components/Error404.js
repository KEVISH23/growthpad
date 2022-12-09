import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import "../Css/HomePage.css";
const Error404 = () => {
  document.body.style.backgroundColor = "#E9F2E9";
  return (
    <>
      <Box justifyContent={"center"} alignItem={"center"} textAlign={"center"}>
        <Typography
          sx={{
            fontSize: {
              lg: "10rem",
              md: "10rem",
              sm: "8rem",
              xs: "5rem",
            },
          }}
        >
          <p className="joinusas">404</p>
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "7rem",
              md: "7rem",
              sm: "5rem",
              xs: "3rem",
            },
          }}
        >
          <p className="joinusas">Page Not Found</p>
        </Typography>
        <Link to="/" style={{textDecoration:"none"}} >
          <Button
            sx={{
              fontSize: {
                lg: "3rem",
                md: "3rem",
                sm: "2rem",
                xs: "2rem",
              },
            }}
            variant="contained"
            color="error"
          >
            <ArrowBackIcon
              sx={{
                mr: 1,
                fontSize: {
                  lg: "3rem",
                  md: "3rem",
                  sm: "2rem",
                  xs: "2rem",
                },
              }}
            />
            Home
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Error404;
