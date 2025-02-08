import { Box, Typography } from "@mui/material";
import LogoPichonDevHeader from "../../../assets/assets-login/LogoPichonDevHeader.svg"
import PichonDevLetters from "../../../assets/assets-login/PichonDevLetters.svg"


const HeaderLogin = () => {
  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "70px",
          backgroundColor: "#302B2B",
          zIndex: 1,
          paddingLeft: "10px",
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* Contenedor del texto y logo */}
        <Box
          sx={{
            display: "flex",
            margin: 0,
            marginTop: 2,
            height: 65
          }}
        >
          {/* TEXTO "PichonDev" */}
          <img src={PichonDevLetters}
          alt= "Letras PichonDev"
          style={{marginLeft: -10 }}/>

          {/* Logo */}
          <img
            src={LogoPichonDevHeader}
            alt="Logo"
            style={{ width: 70, height: 70, marginLeft: -5, marginTop: -5 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HeaderLogin;