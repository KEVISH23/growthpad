import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography , Box} from "@mui/material";
const AppBars = ({ authCheck }) => {
  const [pathState, setpathState] = useState(authCheck);
  const changePath = () => {
    if (pathState === "false") {
      setpathState("true")
    } else {
      setpathState("false")
    }
  }
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
            <Link
              style={{ textDecoration: "none" }}
              to={pathState === "false" ? "/signup" : "/login"}
            >
              <Button onClick={changePath} style={{ color: "white" }}>
                {pathState === "false" ? "Signup" : "Login"}
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AppBars