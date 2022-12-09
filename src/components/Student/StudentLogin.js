import React, { useState } from "react";
import { Box, Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import AppBars from "../AppBars";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import EmailIcon from "@mui/icons-material/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../../Css/HomePage.css";
import StudentSignup from "./StudentSignup";

const StudentLogin = (props) => {
  const [formChange, setformChange] = useState("false");
  const changeFormState = () => {
    setformChange("true");
  };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [details, setdetails] = useState(props.details);
  console.log(props.details);
  const checkUser = (e) => {
    e.preventDefault();
    if (details.length == 0) {
      if (loginField.email == "" || loginField.password == "") {
        alert("Please enter Email and Password");
      } else {
        alert("No User Found Please Register");
        removeElem();
      }
    } else {
      let result = details.find((details) => {
        return (
          details.email === loginField.email &&
          details.password === loginField.password
        );
      });
      if (result) {
        alert("Loggedin Successfully");
        removeElem();
      } else {
        alert("Email or Password incorrect!!");
      }
      // console.log(userDetails)
      // console.log(result)
      // removeElem()
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  document.body.style.backgroundColor = "#E9F2E9";
  // document.body.style.backgroundColor="#DEF2D5"
  const [loginField, setloginField] = useState({
    email: "",
    password: "",
  });
  const loginDetials = (e) => {
    setloginField({
      ...loginField,
      [e.target.name]: e.target.value,
    });
  };
  const removeElem = () => {
    // e.preventDefault();
    setloginField({
      email: "",
      password: "",
    });
  };

  return formChange == "false" ? (
    <>
      <AppBars authCheck={formChange} />
      <Box>
        <Stack
          direction={{
            lg: "row",
            md: "row",
            sm: "row",
            xs: "column",
          }}
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          <Box
            sx={{
              // backgroundColor:"blue",
              // justifyContent: "center",
              width: {
                lg: "40%",
                md: "40%",
                sm: "45%",
                xs: "100%",
              },
            }}
          >
            <img
              src="../images/Login-amico.png"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
          <Stack
            spacing={4}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <h1>
              <p style={{ color: "#588A67" }} className="joinusas">
                <LoginRoundedIcon sx={{ mb: 1 }} fontSize="large" /> LogIn Here
              </p>
            </h1>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailIcon sx={{ color: "#588A67", mr: 1, my: 0.5 }} />
              <TextField
                onChange={loginDetials}
                value={loginField.email}
                name="email"
                fullWidth
                id="input-with-sx"
                label="Email Id"
                color="secondary"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              {values.showPassword ? (
                <VisibilityOff
                  color="secondary"
                  sx={{ mr: 1, my: 0.5 }}
                  onClick={handleClickShowPassword}
                />
              ) : (
                <Visibility
                  color="secondary"
                  sx={{ mr: 1, my: 0.5 }}
                  onClick={handleClickShowPassword}
                />
              )}
              <TextField
                color="secondary"
                id="input-with-sx"
                label="Password"
                variant="standard"
                type={values.showPassword ? "text" : "password"}
                name="password"
                value={loginField.password}
                onChange={loginDetials}
              >
                Password
              </TextField>
            </Box>
            <Stack
              direction={{
                lg: "row",
                md: "row",
                xs: "row",
                sm: "row",
              }}
              spacing={2}
            >
              <Button onClick={checkUser} variant="contained" color="secondary">
                LogIn
              </Button>
              <Button
                onClick={removeElem}
                variant="contained"
                color="secondary"
              >
                Clear
              </Button>
            </Stack>
            <h6 className="joinusas" style={{ marginTop: "20px" }}>
              Not Registered Yet?{" "}
              <Button
                color="secondary"
                variant="text"
                onClick={changeFormState}
              >
                Register Here
              </Button>
            </h6>
          </Stack>
        </Stack>
      </Box>
    </>
  ) : (
    <StudentSignup title="GrowthPad" />
  );
};

export default StudentLogin;
