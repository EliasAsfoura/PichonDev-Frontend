import { Box } from "@mui/material";
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
          height: "8.5vh",
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
      </Box>
    </>
  );
};

export default HeaderLogin;