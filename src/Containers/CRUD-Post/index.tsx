import { Box } from "@mui/material";
import Header from "../../Components/Header";
import ImageUploader from "./Components/ImageUploader";
import TextCrudPost from "./Components/TextCrudPost";
import { headerContainerBox } from "./Components/styles";






const CrudPost = () => {
    return (
        <>

            <Box sx={headerContainerBox}>

                <Header />

            </Box>



            <TextCrudPost />



            <Box sx={{
                position:{md:"fixed", sm: "relative"} ,
                top: 0,
                left: 0,
            }}>

                <ImageUploader />

            </Box>


        </>
    )
}

export default CrudPost;