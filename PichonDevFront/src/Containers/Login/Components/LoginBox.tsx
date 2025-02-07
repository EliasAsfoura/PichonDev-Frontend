import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";


const LoginBox = () => {
    return (
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center", // Alinea a la derecha
          height: "100vh",
          backgroundImage: "url(https://source.unsplash.com/random/1600x900/?code,technology)",
          backgroundSize: "cover",
          backgroundPosition: "right",
          marginTop: "0px", // Para que no lo tape el Header
          paddingLeft: "500px", // Ajuste de margen derecho
        }}
      >
        <Box
          sx={{
            width: "400px",
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "rgb(0, 0, 0)",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="h5" sx={{ color: "white", textAlign: "center", fontWeight: "bold", fontFamily: "sans-serif", }}>
            Login
          </Typography>
  
          <TextField variant="outlined" label="Email" fullWidth InputProps={{ style: { color: "white" } }} sx={{ input: { color: "white" }, label: { color: "gray" } }} />
          <TextField variant="outlined" label="Password" type="password" fullWidth InputProps={{ style: { color: "white" } }} sx={{ input: { color: "white" }, label: { color: "gray" } }} />
  
          <FormControlLabel control={<Checkbox sx={{ color: "white" }} />} label={<Typography sx={{ color: "white" }}>Remember Data</Typography>} />
  
          <Button variant="contained" fullWidth sx={{ backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}>
            LOGIN
          </Button>
  
          <Typography variant="body2" sx={{ color: "lightblue", textAlign: "center", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
            Forgot Password?
          </Typography>
        </Box>
      </Box>
  
     
    );
  };

export default LoginBox;
