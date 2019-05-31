import firebase from 'firebase'
import uuid from 'uuid';

const INIT_DELETE_MOVIE_STATE = 'INIT_DELETE_MOVIE_STATE'

export const initDeleteMovieState = () => {
    return {
        type: INIT_DELETE_MOVIE_STATE
    }
}


const DELETE_MOVIE_VALIDATION_FAILED = 'DELETE_MOVIE_VALIDATION_FAILED';

export const deleteMovieValidationFailed = (error) => {
    return {
        type: DELETE_MOVIE_VALIDATION_FAILED,
        payload: error,
    }
}

const DELETE_MOVIE_REQUEST = 'DELETE_MOVIE_REQUEST';
const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
const DELETE_MOVIE_FAILED = 'DELETE_MOVIE_FAILED';

function deleteMovieRequest() {
    return {
        type: DELETE_MOVIE_REQUEST,
    }
}
function deleteMovieSuccess() {
    return {
        type: DELETE_MOVIE_SUCCESS,
    }
}
function deleteMovieFailed(error) {
    return {
        type: DELETE_MOVIE_FAILED,
        payload: error
    }
}

export function deleteMovie(id) {
    return (dispatch) => {

        dispatch(deleteMovieRequest());
        firebase.firestore().collection('movies').doc(id)
            .delete()
            .then(function () {
                dispatch(deleteMovieSuccess())
                console.log("Document successfully deleted!")
            }).catch(function (error) {
                dispatch(deleteMovieFailed());
                console.error("Error removing document: ", error);
            })
    }


}



const initialState = {
    error: null,
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    doc: null,
}

export default function deleteMovieReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_MOVIE_VALIDATION_FAILED:
            return Object.assign({}, state, {
                error: action.payload
            })
        case DELETE_MOVIE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                isSuccess: false,
                isFailed: false,
                error: null,
            })
        case DELETE_MOVIE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isSuccess: true,
                isFailed: false,
            })
        case DELETE_MOVIE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                isSuccess: false,
                isFailed: true,
                error: action.payload,
            })
        case INIT_DELETE_MOVIE_STATE:
            return Object.assign({}, initialState);

        default:
            return state;
    }
}