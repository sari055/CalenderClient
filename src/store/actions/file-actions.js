import { HttpStatusCode } from "axios";
import FileService from "../../services/FileService";
import { enqueueSnackbar } from 'notistack';

export const uploadFile = (file) => async dispatch => {
    const formData = new FormData();
    formData.append("formFile", file);
    formData.append("fileName", file.name);
    try {
        const response = await FileService.saveImage(formData);
        if (response.status == HttpStatusCode.Created) {
            const variant = "success"
            enqueueSnackbar('התמונה נשמרה בהצלחה!', { variant });
        }
    }
    catch (error) {
        const variant = "error"
        enqueueSnackbar('error', { variant });
    }
}