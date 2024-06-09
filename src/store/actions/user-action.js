import { GET_CURRENT_USER } from '../types/user-types';
import { enqueueSnackbar } from 'notistack';
import UserService from '../../services/UserService';

export function getCurrentUser(user) {
    return {
        type: GET_CURRENT_USER,
        payload: user
    }
}

// export function setEditDetails() {
//     return {
//         type: SET_EDIT_DETAILS
//     }
// }

/**
 * get user action
 */

export const getCurrentUserByTz = (userTz) => async dispatch => {
    try {
        if (userTz) {
            const response = await UserService.getCurrentUser(userTz);
            if (response.data) {
                dispatch(getCurrentUser(response.data))
            }
        }
    }
    catch (error) {
        if (error?.response?.status == 400) {
            enqueueSnackbar(`${error?.response?.data?.message}`, { variant: "error" });
        }
        else {
            enqueueSnackbar(`An unexpected error has occurred`, { variant: "error" });
        }
    }

}


/**
 * Edit Details action
 */

export const editDetails = (userDetails) => async dispatch => {
    try {
        await UserService.setEditDetails(userDetails);
        dispatch(getCurrentUser(userDetails?.Tz));

    }
    catch (error) {
        if (error?.response?.status == 400) {
            enqueueSnackbar(`${error?.response?.data?.message}`, { variant: "error" });
        }
        else {
            enqueueSnackbar(`An unexpected error has occurred`, { variant: "error" });
        }
    }
}