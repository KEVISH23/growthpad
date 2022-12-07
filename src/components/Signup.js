import * as React from "react";
import { Box, Stack, Grid , TextField,Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import '../Css/HomePage.css'

const Signup = () => {
   const [values, setValues] = React.useState({
     amount: "",
     password: "",
     weight: "",
     weightRange: "",
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

   const handleMouseDownPassword = (event) => {
     event.preventDefault();
   };
  return (
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
            style={{ width: "100%" }}
          />
        </Box>
        <Stack alignItems={"center"} style={{ marginTop: "40px" }}>
          <h1>
            <p color={"secondary"} className="joinusas">
              Signin Here
            </p>
          </h1>

          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "secondary", mr: 1, my: 0.5 }} />
              <TextField
                color="secondary"
                id="input-with-sx"
                label="Username"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailIcon sx={{ color: "secondary", mr: 1, my: 0.5 }} />
              <TextField
                color="secondary"
                id="input-with-sx"
                label="Email"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              {values.showPassword ? (
                <VisibilityOff sx={{ color: "secondary", mr: 1, my: 0.5 }} onClick={handleClickShowPassword} />
              ) : (
                <Visibility sx={{ color: "secondary", mr: 1, my: 0.5 }} onClick={handleClickShowPassword} />
              )}
              <TextField
                color="secondary"
                id="input-with-sx"
                label="Password"
                variant="standard"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
              >
                Password
              </TextField>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Signup;
