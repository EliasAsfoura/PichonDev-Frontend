import { Box } from "@mui/material";
import './login.css'
import HeaderLogin from "./Components/Header";
import LoginBox from "./Components/LoginBox";
import BackgroundPageLogin from "./Components/BackgroundLogin"


//       RAMA PRINCIPAL        //

const Login = () => {
  return (
    <>
      <HeaderLogin/>
      <BackgroundPageLogin />
      <Box
        sx={{
          position: "absolute", 
          zIndex: 3, 
          marginLeft: "70%",
          marginTop:"12%",

        }}
      >
        <LoginBox />
      </Box>
    </>
  )
}




export default Login;
