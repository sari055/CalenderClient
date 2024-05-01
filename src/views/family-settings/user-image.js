import React from "react";
import CardMedia from '@mui/material/CardMedia';
import FileUpload from "../../components/file-upload";


const UserImage = ({ imgUrl }) => {
    return (
        <CardMedia
            sx={{ height: '100vh' }}
            image={imgUrl}
            title="green iguana"
        >
            <FileUpload text={!imgUrl ? "הוספת תמונה" : "עדכון תמונה"} />
        </CardMedia>
    );
}

export default UserImage;