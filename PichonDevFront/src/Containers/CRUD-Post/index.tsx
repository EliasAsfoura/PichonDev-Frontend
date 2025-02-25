import { Box } from "@mui/material";
import Header from "../../Components/Header";
import ImageUploader from "./Components/ImageUploader";
import TitleCrudPost from "./Components/TitleCrudPost";
import TextCrudPost from "./Components/TextCrudPost";
import ButtonPost from "./Components/ButtonPost";
import './Crud-Post.css'





const CrudPost = () => {
    return (
        <>

            <Box sx={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1000,
            }}>

                <Header />

            </Box>

       
               <TitleCrudPost /> 

               <TextCrudPost/>

               <ButtonPost/>


            <Box sx={{
                position: "fixed",
                top: 0,
                left: 0,
            }}>

                <ImageUploader />

            </Box>


        </>
    )
}

export default CrudPost;