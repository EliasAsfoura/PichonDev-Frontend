import { Box, Typography } from "@mui/material";
import LogoPichonDevHeader from "/GitHub Repository/PichonDev---Front/PichonDev-Frontend/PichonDevFront/src/assets/assets-login/LogoPichonDevHeader.svg"



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
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
          }}
        >
          {/* Contenedor del texto y logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* TEXTO "PichonDev" */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: "sans-serif",
                fontWeight: 800,
                fontStyle: "italic",
                color: "white",
              }}
            >
              PichonDev
            </Typography>
  
            {/* Logo */}
            <img
              src={LogoPichonDevHeader} // Reemplaza con la ruta correcta de tu logo
              alt="Logo"
              style={{ width: 60, height: 60, marginLeft: 10 }} // Ajuste del tamaño y margen
            />
          </Box>
        </Box>
      </>
    );
  };
  
  export default HeaderLogin;