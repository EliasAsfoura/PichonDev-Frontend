import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";


const LoginBox = () => {
  return (
    <Box
      sx={{
        width: "110%",
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

      <TextField variant="outlined" label="Email" fullWidth InputProps={{ style: { color: "white" } }} sx={{
        input: { color: "white" },
        label: { color: "gray" },
        "& .MuiOutlinedInput-root fieldset": {
          borderColor: "white",
          borderWidth: "2px"
        },
      }} />
      <TextField variant="outlined" label="Password" type="password" fullWidth InputProps={{ style: { color: "white" } }} sx={{
        input: { color: "white" },
        label: { color: "gray" },
        "& .MuiOutlinedInput-root fieldset": {
          borderColor: "white",
          borderWidth: "2px"
        },
      }} />

      <FormControlLabel control={<Checkbox sx={{ color: "white" }} />} label={<Typography sx={{ color: "white" }}>Remember Data</Typography>} />

      <Button variant="contained" fullWidth sx={{ backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}>
        LOGIN
      </Button>

      <Typography variant="body2" sx={{ color: "lightblue", textAlign: "center", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
        Forgot Password?
      </Typography>
    </Box>
  );
};

export default LoginBox;
