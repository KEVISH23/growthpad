import React , {useState} from "react";
import { Box, Stack, TextField , Button} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import "../Css/HomePage.css";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
const Signup = () => {

  const [fields, setfields] = useState({
    name: "",
    email: "",
    password: "",
    homeAddress: "",
    mobile: "",
    tutionName: "",
    tutionAddress:""
  })
  
   const removeElem = (e) => {
     e.preventDefault();
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
  }


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
        sx={{
          mt: {
            lg: "50px",
            sm:"50px"
          },
        }}
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
              Signin Here
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
                onChange={fieldValue}
                value={fields.homeAddress}
                fullWidth
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
                onChange={fieldValue}
                fullWidth
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
              <Button variant="contained" color="secondary">
                SignIn
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={removeElem}
              >
                {" "}
                Clear{" "}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Signup;
