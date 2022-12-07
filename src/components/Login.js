import { Box, Stack } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Container, Grid } from '@mui/material';

const Login = () => {
  return (
    <Box>
      <Stack
        direction={{
          lg:"row",
          md:"row",
          sm:"column",
          xs:"column"}
        }
        justifyContent="space-around"
        spacing={2}
      >
        <Box sx={{
          backgroundColor:"blue",
         width:{
          lg:"45%",
          md:"45%",
          sm:"100%",
          xs:"100%",
         }
        }}>
          <img src="../images/Login-amico.png" alt="" style={{width:"100%"}} />
        </Box>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
    </Box>
  )
}

export default Login