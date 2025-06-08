import { Box, Button, Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import PichonDevLetters from "../assets/assets-login/PichonDevLetters.svg"
import PerfilLogo from "../assets/assets-header/PerfiLogo.svg"
import BotonHome from "../assets/assets-header/BotonHome.svg"
import ButtonAccounts from "../assets/assets-header/ButtonAccounts.svg"
import React from "react";





const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isXsDown = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          height: { xl: "10vh", md: "12vh" },
          backgroundColor: "#302B2B",
          zIndex: 1000,

        }}
      >
        <Grid container direction={"row"} alignItems={"center"} sx={{ padding: "10px 0px", display: "flex", justifyContent: "space-between" }}>
          {/* Contenedor del texto y logo */}

          {/* TEXTO "PichonDev" */}

          <Grid size={{}}>
            <img src={PichonDevLetters}
              alt="Letters_PichonDev"
              style={{ width: "25vw" }} />
          </Grid>

          {/* Contenedor de botones Header */}

          {isMdUp && (

            <Grid display={"flex"}>

            <Grid margin={2.5}>
              <Button>
                <img style={{ width: "5.5vw" }} src={ButtonAccounts} alt="Button_Accounts" />
              </Button>
            </Grid>

            <Button sx={{}}> <a href="http://localhost:5173/">
              <img
                src={BotonHome}
                alt="Boton_Home"
                style={{ width: "2.5vw" }}
              />
            </a>
            </Button>

            <Button sx={{}}>
              <a href="https://www.instagram.com/tianncito/">
                <img
                  src={PerfilLogo}
                  alt="Profile_Redirect"
                  style={{ width: "10vw" }}
                />
              </a>
            </Button>
          </Grid>

          )}
          

          {isMdDown && (
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "#1976D2" }}>
              <MenuIcon />
            </IconButton>
          )}

          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} >
            <List >

              <Link to="/accounts" style={{textDecoration: "none"}}  >
                <ListItem component="button" onClick={toggleDrawer(false)}>
                  <ListItemText sx={{ color: "#1976D2",  }} primary="Acounts" />
                </ListItem>
              </Link>
              <Link to="/inicio" style={{textDecoration: "none"}}>
                <ListItem component="button" onClick={toggleDrawer(false)}>
                  <ListItemText sx={{ color: "#1976D2" }} primary="Home" />
                </ListItem>
              </Link>
              <Link to="/profile" style={{textDecoration: "none"}}>
                <ListItem component="button" onClick={toggleDrawer(false)}>
                  <ListItemText sx={{ color: "#1976D2" }} primary="Profile" />
                </ListItem>
              </Link>

            </List>
          </Drawer>

        </Grid>
      </Box>
    </>
  );
};

export default Header;