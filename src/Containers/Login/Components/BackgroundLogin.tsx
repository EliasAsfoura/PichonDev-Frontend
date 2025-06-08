import { Box } from "@mui/material";
import BackgroundImage from "../../../assets/assets-login/BackgroundImage.jpg"

const BackgroundPageLogin = () => {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
    );
  };

  export default BackgroundPageLogin