import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2"

const TextCrudPost = () => {
    return (
        <Grid container direction={"column"} sx={{
            display: "flex",
            alignItems:{xs: "center",sm: "center", md: "end"},
            marginTop: "15vh",
            marginRight: "4vw",
            gap:"0.5vw",
        }}>


            <Grid >
                <TextField sx={{
                    width:{xs:"80vw", md: "50vw"}
                }}
                    variant="outlined"
                    placeholder="The Title Here..."
                    multiline
                    InputProps={{
                        sx: {
                            fontFamily: "'Rosarivo', serif",
                            fontWeight: 700,
                            backgroundColor: "#e0e0e0",
                            borderRadius: "1vh",
                            "&.MuiOutlinedInput-root": {
                                "& fieldset": { border: "GrayText", fontFamily: "'Rosarivo', serif" },
                            },
                            "& input": {
                                color: "black", // Color de texto tenue
                                fontStyle: "italic", // Texto en cursiva si lo deseas

                            },
                        },
                    }}
                />
        </Grid>

        <Grid>
            <TextField
                variant="outlined"
                placeholder="The Text Here..."
                multiline
                rows={15}
                sx={{ width:{xs:"75vw", md: "50vw"}}}
                InputProps={{
                    sx: {



                        backgroundColor: "#e0e0e0", // Color gris claro de fondo
                        "&.MuiOutlinedInput-root": {
                            "& fieldset": { border: "GrayText" }, // Elimina el borde del input

                        },
                        "& input": {
                            color: "black", // Color de texto
                            fontStyle: "italic", // Texto en cursiva


                        },
                    },
                }}
            />    
        </Grid>
        
        <Grid>

                <Button sx={{

                    backgroundColor: "#1a78ca",
                    color: "black",
                    fontFamily: "'Rosarivo', serif",
                    fontWeight: 600,
                    height:{sm: "10vh",md: "10vh"},
                    width: {xs:"80vw", md: "50vw"},
                }}>
                    Post
                </Button>
            </Grid>
        </Grid>
    );
};

export default TextCrudPost;
