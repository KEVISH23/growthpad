import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Grid, Stack } from "@mui/material";
import NotesIcon from '@mui/icons-material/Notes';
import AppBars from "../AppBars";

export default function Home(props) {
  document.body.style.backgroundColor="#E9F2E9"
  return (
    <>

     <AppBars />
      <Container>
        <Grid justifyContent="center" mt={10} container spacing={3}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Stack justifyContent="center" alignItems="center" direction="column">
            

              <img src="../images/notice.png" style={{height:"100px"}}/>
            
                <p>Teachers Can Provide Notice For their Students</p>
                <Button color="secondary" variant="contained">Enter Notice</Button>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={8} xs={12}>
          <Stack justifyContent="center" alignItems="center" direction="column">
          <img src="../images/rupee.png" style={{height:"100px"}}/>
                <p>Subscribe For Benefits!!</p>
                <Button color="secondary" variant="contained">Subscribe</Button>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={8} xs={12}>
          <Stack justifyContent="center" alignItems="center" direction="column">
          <img src="../images/student-with-graduation-cap.png" style={{height:"100px"}}/>
                <p>Teachers can access and view students details.</p>
                <Button color="secondary" variant="contained">View Students</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}
