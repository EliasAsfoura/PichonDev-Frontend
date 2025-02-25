import { Box, Button } from "@mui/material";

const ButtonPost = () => {
    return (

        <Box sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "5vh",
            marginRight: "7vw"

        }}>

        <Button sx={{

            backgroundColor: "#1a78ca",
            color: "black",
            fontFamily: "'Rosarivo', serif",
            fontWeight: 600,
            height: "10vh",
            width: "50vw",

            
            
        }}>
            Post
        </Button>
        </Box>
    )
}

export default ButtonPost;