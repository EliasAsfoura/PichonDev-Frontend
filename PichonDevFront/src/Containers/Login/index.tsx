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
      <BackgroundPageLogin /> {/* Este será el fondo */}
      <Box
        sx={{
          position: "absolute", // Lo saca del flujo normal y permite posicionarlo en la pantalla
          zIndex: 3, // Se asegura de que los botones estén sobre la imagen
          marginRight:"5%",
          top:"30%",
          left:"70%"
        }}
      >
        <LoginBox />
      </Box>
    </>
  )
}




export default Login;
