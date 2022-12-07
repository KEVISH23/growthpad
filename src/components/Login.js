import { Box, Stack } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField';
import { AccountCircle } from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import EmailIcon from '@mui/icons-material/Email';
const Login = () => {
  document.body.style.backgroundColor = "#E9F2E9"
  // document.body.style.backgroundColor="#DEF2D5"
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
          <h1 style={{ color: "#588A67" }}><LoginRoundedIcon sx={{fontSize:"24px"}}/> LogIn Here</h1>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailIcon sx={{ color: '#588A67', mr: 1, my: 0.5 }} />
            <TextField fullWidth id="input-with-sx" label="Email Id" color="secondary" variant="standard" />
          </Box>
          <Box sx={{ marginTop: "10px", display: 'flex', alignItems: 'flex-end' }}>
            <VisibilityOffIcon sx={{ color: '#588A67', mr: 1, my: 0.5 }} />
            <TextField fullWidth id="input-with-sx" label="Password" type="password" color="secondary" variant="standard" />
          </Box>
          <Stack direction={{
            lg: "row",
            md: "row",
            xs: "row",
            sm: "row"
          }} spacing={2}>

            <Button  variant="contained" color="secondary"> LogIn </Button>
            <Button variant="contained" color="secondary"> Clear </Button>
            
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Login