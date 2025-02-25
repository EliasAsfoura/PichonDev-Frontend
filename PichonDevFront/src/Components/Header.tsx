import { Box, Button, Typography } from "@mui/material";
import LogoPichonDevHeader from "../assets/assets-login/LogoPichonDevHeader.svg"
import PichonDevLetters from "../assets/assets-login/PichonDevLetters.svg"
import PerfilLogo from "../assets/assets-header/PerfiLogo.svg"
import BotonHome from "../assets/assets-header/BotonHome.svg"
import ButtonAccounts from "../assets/assets-header/ButtonAccounts.svg"





const Header = () => {
  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          height: "8.5vh",
          backgroundColor: "#302B2B",
          zIndex: 1000,
          paddingLeft: "10px",
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* Contenedor del texto y logo */}
        <Box
          sx={{
            display: "flex",
            marginTop: "1vw",
            height: "8vh"
          }}
        >
          {/* TEXTO "PichonDev" */}
          <img src={PichonDevLetters}
            alt="Letters_PichonDev"
            style={{ marginLeft: -10 }} />

          {/* Logo */}
          <img
            src={LogoPichonDevHeader}
            alt="Logo_PichonDev"
            style={{ width: "4vw", height: "8vh", marginLeft: "-1vh", marginTop: "-1vh" }}
          />
        </Box>

        {/* Contenedor de botones Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "end", // Alinea a la derecha
            alignItems: "center", // Alinea verticalmente
            width: "100vw",
            height: "2vh",
            gap: "2vh", // Espacio entre botones
          }}
        >
          {/* Boton Accounts */}

          <Button>

            <img style={{height: "2.8vh", width: "6.5vw"}} src={ButtonAccounts} alt="Button_Accounts" />

          </Button>


          {/* Botón Home */}

          <Button sx={{marginLeft: "1.5vh"}}> <a href="http://localhost:5173/">
            <img
              src={BotonHome}
              alt="Boton_Home"
              style={{ height: "6vh", marginTop: "0.5vw" , width: "2.5vw"}}
            />
          </a>
          </Button>

          {/* Botón Perfil */}
          <Button sx={{  marginTop: "0.5vw", height: "10vh", }}>
            <a href="https://www.instagram.com/tianncito/">
              <img
                src={PerfilLogo}
                alt="Profile_Redirect"
                style={{
                  height: "8vh",
                }}
              />
            </a>
          </Button>
        </Box>


      </Box>
    </>
  );
};

export default Header;