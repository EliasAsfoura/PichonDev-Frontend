import { Box } from "@mui/material";
import './login.css'
import HeaderLogin from "./Components/Header";
import LoginBox from "./Components/LoginBox";
import BackgroundPageLogin from "./Components/BackgroundLogin"


  //       RAMA PRINCIPAL        //

const Login = () => {
return (
<>

 <HeaderLogin></HeaderLogin>
    
    
    <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
    <BackgroundPageLogin /> {/* Este será el fondo */}
    <Box
      sx={{
        position: "relative",
        zIndex: 1, // Se asegura de que los botones estén sobre la imagen
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >


 <LoginBox></LoginBox>
 
 
 </Box>
</Box>

</>
      )
}




export default Login;
