import React, { useState } from 'react'
import { Box, Stack } from '@mui/system'
import TextField from '@mui/material/TextField';
// import { AccountCircle } from '@mui/icons-material';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import EmailIcon from '@mui/icons-material/Email';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Login = () => {
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
  document.body.style.backgroundColor = "#E9F2E9"
  // document.body.style.backgroundColor="#DEF2D5"
  const [loginField, setloginField] = useState({
    email: "",
    password: ""
  })
  const loginDetials = (e) => {

    setloginField({
      ...loginField,
      [e.target.name]: e.target.value
    })
  }
  const removeElem = (e) => {
    e.preventDefault()
    setloginField({
      email: "",
      password: ""
    })
  }
  return (
    <Box>
      <Stack
        direction={{
          lg: "row",
          md: "row",
          sm: "row",
          xs: "column"
        }
        }
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Box sx={{
          // backgroundColor:"blue",
          justifyContent: "center",
          width: {
            lg: "45%",
            md: "45%",
            sm: "45%",
            xs: "100%",
          }
        }}>
          <img src="../images/Login-amico.png" alt="" style={{ width: "100%" }} />
        </Box>
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center">
          <h1 style={{ color: "#588A67" }}><LoginRoundedIcon sx={{ fontSize: "24px" }} /> LogIn Here</h1>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailIcon sx={{ color: '#588A67', mr: 1, my: 0.5 }} />
            <TextField onChange={loginDetials} value={loginField.email} name="email" fullWidth id="input-with-sx" label="Email Id" color="secondary" variant="standard" />
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
          <Stack direction={{
            lg: "row",
            md: "row",
            xs: "row",
            sm: "row"
          }} spacing={2}>

            <Button variant="contained" color="secondary"> LogIn </Button>
            <Button onClick={removeElem} variant="contained" color="secondary"> Clear </Button>

          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Login