import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  AppBar,
  Typography,
  Toolbar,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import "../Css/HomePage.css";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import Login from "./Login";
import AppBars from "./AppBars";
const Signup = (props) => {
  const [fields, setfields] = useState({
    name: "",
    email: "",
    password: "",
    homeAddress: "",
    mobile: "",
    tutionName: "",
    tutionAddress: "",
  });
  const [userDetails, setuserDetails] = useState([]);
  const [formChange, setformChange] = useState("false");
  const changeFormState = () => {
    setformChange("true");
  };
  // const userDetails =[]
  const enterUserDetails = (e) => {
    e.preventDefault();

    if (userDetails.length == 0) {
      if(fields.email=="" || fields.password=="" || fields.name=="" || fields.homeAddress=="" || fields.mobile=="" || fields.tutionAddress=="" || fields.tutionName=="" ){
        alert("Kindly fill up all the fields")
      }
      else{
        
          alert("Account Created");
          userDetails.push(fields);
          removeElem()
        
      }
    } else {
      if(fields.email=="" || fields.password=="" || fields.name=="" || fields.homeAddress=="" || fields.mobile=="" || fields.tutionAddress=="" || fields.tutionName=="" ){
        alert("Kindly fill up all the fields")
      }
      else{

        let result = userDetails.find((userDetails) => {
          return userDetails.email === fields.email;
        });
        if (result) {
          alert("User Exist");
        } else {
          alert("Account Created");
          userDetails.push(fields);
          removeElem()
        }
        console.log(userDetails);
        console.log(result);
      }
      // removeElem()
    }
    console.log(userDetails);
  };
  const removeElem = () => {
    //  e.preventDefault();
    setfields({
      name: "",
      email: "",
      password: "",
      homeAddress: "",
      mobile: "",
      tutionName: "",
      tutionAddress: "",
    });
  };

  const fieldValue = (e) => {
    if (e.target.name === "mobile") {
      if (isNaN(e.target.value)) {
        {
          // alert(e.target.value);
        }
      } else {
        if (fields.mobile.length <= 9) {
          setfields({
            ...fields,
            [e.target.name]: e.target.value,
          });
        } else {
          // alert("sabun slow")
        }
      }
    } else {
     
     

        setfields({
          ...fields,
          [e.target.name]: e.target.value,
        });
      
    }
  };

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  document.body.style.backgroundColor = "#E9F2E9";

  return formChange == "false" ? (
    <>
      <AppBars />

      <Box>
        <Stack
          direction={{
            lg: "row",
            md: "row",
            sm: "row",
            xs: "column",
          }}
          justifyContent="space-around"
          spacing={2}
        >
          <Box
            sx={{
              width: {
                lg: "45%",
                md: "45%",
                sm: "50%",
                xs: "100%",
              },
            }}
          >
            <img
              src="../images/Mobile login-amico.png"
              alt=""
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </Box>
          <Stack alignItems={"center"}>
            <h1>
              <p style={{ color: "#588A67" }} className="joinusas">
                <HowToRegIcon fontSize="large" sx={{ mb: 1 }} /> Signin Here
              </p>
            </h1>

            <Box sx={{ "& > :not(style)": { m: 1.5 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle color="secondary" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  color="secondary"
                  id="input-with-sx"
                  label="Username"
                  variant="standard"
                  fullWidth
                  name="name"
                  value={fields.name}
                  onChange={fieldValue}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmailIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  type="email"
                  color="secondary"
                  id="input-with-sx"
                  label="Email"
                  variant="standard"
                  fullWidth
                  onChange={fieldValue}
                  name="email"
                  value={fields.email}
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
                  fullWidth
                  onChange={fieldValue}
                  type={values.showPassword ? "text" : "password"}
                  name="password"
                  value={fields.password}
                >
                  Password
                </TextField>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <HomeIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  name="homeAddress"
                  id="outlined-multiline-flexible"
                  label="Address"
                  multiline
                  maxRows={3}
                  color="secondary"
                  variant="standard"
                  fullWidth
                  onChange={fieldValue}
                  value={fields.homeAddress}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PhoneIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  name="mobile"
                  id="outlined-multiline-flexible"
                  label="Mobile Number"
                  color="secondary"
                  variant="standard"
                  fullWidth
                  onChange={fieldValue}
                  value={fields.mobile}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <MenuBookIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  name="tutionName"
                  color="secondary"
                  id="input-with-sx"
                  label="Tution Class Name"
                  variant="standard"
                  fullWidth
                  onChange={fieldValue}
                  value={fields.tutionName}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <HomeIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  name="tutionAddress"
                  id="outlined-multiline-flexible"
                  label="Tution Address"
                  multiline
                  maxRows={3}
                  color="secondary"
                  variant="standard"
                  fullWidth
                  onChange={fieldValue}
                  value={fields.tutionAddress}
                />
              </Box>
              <Stack
                direction={{
                  lg: "row",
                  md: "row",
                  xs: "row",
                  sm: "row",
                }}
                justifyContent="center"
                alignItems={"center"}
                spacing={2}
              >
                <Button
                  variant="contained"
                  onClick={enterUserDetails}
                  color="secondary"
                >
                  SignIn
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={removeElem}
                >
                  Clear
                </Button>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent="center"
                alignItems={"center"}
                style={{ marginBottom: "2rem" }}
              >
                <h6 className="joinusas">
                  Already Registered?{" "}
                  <Button
                    color="secondary"
                    variant="text"
                    onClick={changeFormState}
                  >
                    Login Here
                  </Button>
                </h6>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  ) : (
    <Login title="GrowthPad" details={userDetails} />
  );
};

export default Signup;
