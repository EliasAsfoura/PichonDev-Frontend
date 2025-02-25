import { Box } from "@mui/material";
import './login.css'
import HeaderLogin from "./Components/HeaderLogin";
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
          display: "flex",
          position: "absolute",
          zIndex: 3,
          justifyContent: "flex-end", // Centra horizontalmente
          alignItems: "center", // Centra verticalmente
          width: "96vw", // Ocupa todo el ancho
          height: "110vh", // Ocupa todo el alto

        }}
      >
        <LoginBox />
      </Box>
    </>
  )
}




export default Login;
