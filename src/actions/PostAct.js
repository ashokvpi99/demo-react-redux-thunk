import { GET_ALL_POST, SAVE_POST, DELETE_POST } from '../actionsTypes/postAction';
import dataService from '../services/dataService';

export const getAllPost = (url) => (dispatch) => {
    dataService.get(url)
    .then(pay => dispatch({
        type: GET_ALL_POST,
        payload: pay,
    }))
    .catch(err => dispatch({
        error: err
    }))
};

export const SavePost = (url, data) => (dispatch) => {
    dataService.post(url, data)
        .then(pay => dispatch({
            type: SAVE_POST
        }))
        .catch(err => dispatch({
            error: err
        }))
};

export const DeletePost = (url) => (dispatch) => {
        dataService.delete(url)
        .then(pay => dispatch({
            type: DELETE_POST
        }))
        .catch(err => dispatch({
            error: err
        }))
};