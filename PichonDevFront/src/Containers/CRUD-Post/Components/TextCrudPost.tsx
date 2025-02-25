import { Box, TextField } from "@mui/material";

const TextCrudPost = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10vw",
            height: "auto",
            width: "93vw"

        }}>
            <TextField 
                variant="outlined"
                placeholder="The Text Here..."
                multiline
                rows={11}
                InputProps={{
                    sx: {
                        height: "45vh",
                        width: "50vw",

        
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
        </Box>
    );
};

export default TextCrudPost;
