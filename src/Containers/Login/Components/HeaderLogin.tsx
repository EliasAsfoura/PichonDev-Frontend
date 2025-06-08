import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2"
import PichonDevLetters from "../../../assets/assets-login/PichonDevLetters.svg"


const HeaderLogin = () => {
    return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          margin: -1,
          width: "100vw",
          height: {xl:"9vh", md:"12vh",},
          backgroundColor: "#302B2B",
         
          
        }}
      >
        <Grid container direction={"row"}  sx={{ padding: "10px 0px" }}>
          <Grid size = {{}}>
          <img src={PichonDevLetters}
            alt="Letters_PichonDev"
            style={{ width: "25vw" }} />
          </Grid>
        </Grid>
    </Box>
    </>
  );
};

export default HeaderLogin;