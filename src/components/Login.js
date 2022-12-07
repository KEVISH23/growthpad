import { Box, Stack } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

const Login = () => {
  return (
    <Container>
      <Stack direction="row"  spacing={2}>
      
      <img src="../images/Login-amico.png" alt="" sx={{}}style={{
          height:"50%",
          width:"50%",
          display:{sm:"block",xs:"none"}
        }}/>
   
        
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
    </Container>
  )
}

export default Login