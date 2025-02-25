import { Box, TextField } from "@mui/material"

const TitleCrudPost = () => {
  return (
    <>

      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
        width:"100%",
        marginTop: "15vh",
        marginLeft: "-15vw"
      }}>

        <TextField sx={{
        height: "10vh",
        width: "42vw",
                          
        }}
          variant="outlined"
          placeholder="The Title Here..."
          multiline
          InputProps={{
            sx: {
              fontFamily: "'Rosarivo', serif" ,
              fontWeight: 700,
              backgroundColor: "#e0e0e0", 
              borderRadius: "1vh",
              "&.MuiOutlinedInput-root": {
                "& fieldset": { border: "GrayText" ,  fontFamily: "'Rosarivo', serif"},
              },
              "& input": {
                color: "black", // Color de texto tenue
                fontStyle: "italic", // Texto en cursiva si lo deseas
                
                 },
              },
           }}
        />
       </Box>

    </>
  )
}

export default TitleCrudPost;