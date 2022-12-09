import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography , Box} from "@mui/material";
const AppBars = ({ studSign }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#588A67" }}>
          <Toolbar>
            <Typography
              fontFamily={"Montserrat, sans-serif"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white" }}
            >
              <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                GrwothPad
              </Link>
            </Typography>
            {studSign ? (
              <Link style={{ textDecoration: "none" }} to={"/studentLogin"}>
                <Button style={{ color: "white" }}>Login</Button>
              </Link>
            ) : (
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                <Button style={{ color: "white" }}>Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AppBars