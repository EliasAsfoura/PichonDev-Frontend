import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"
import ButtonAddition from "../../../assets/assets-CrudPost/ButtonAddition.svg";

const ImageUploader: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [imagePreview, setImagePreview] = useState<string | null>(null); // Guarda la URL de la imagen seleccionada

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            setFiles([selectedFile]);

            // Generar URL temporal para la imagen seleccionada
            const previewURL = URL.createObjectURL(selectedFile);
            setImagePreview(previewURL);
        }
    };

    return (

        <Grid container direction={"column"} display={"flex"} alignContent={"center"} sx={{ marginTop: "15vh", marginLeft: {sm:0, md: "5vw"}, }}>
        <Box>
            <input
                type="file"
                id="upload-button"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            
            {/* Contenedor con posición relativa para superponer la imagen */}
            <Box
                component="label"
                htmlFor="upload-button"
                sx={{
                    position: "relative",
                    width: {xs: "80vw",sm:"70vw",md:"35vw"},
                    height: {xs:"50vh",sm: "50vh", md:"60vh"},
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    backgroundColor: "ButtonHighlight",
                    "&:hover": { backgroundColor: "#ddd" }
                }}
            >
                {/* Imagen seleccionada (superpuesta encima del botón) */}
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Selected"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "0.8vh"
                        }}
                    />
                )}

                {/* Botón personalizado (visible solo si no hay imagen) */}
                
                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <img src={ButtonAddition} alt="ButtonAddImage" style={{ height: "10vh" }} />
                        <Typography
                            sx={{
                                color: "black",
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 700,
                                fontSize: "2.7vh"
                            }}
                        >
                            ADD IMAGE
                        </Typography>
                        <Typography sx={{ color: "grey", fontFamily: "italic", fontSize: "2.4vh" }}>
                            (Optional)
                        </Typography>
                    </Box>
                
            </Box>
        </Box>
    </Grid>
    );
};

export default ImageUploader;
