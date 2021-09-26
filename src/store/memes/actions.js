import { 
    FETCH_MEMES_FAILURE, 
    FETCH_MEMES_START, 
    FETCH_MEMES_SUCCESS, 
    DELETE_MEME_START, 
    DELETE_MEME_SUCCESS, 
    DELETE_MEME_FAILURE ,
    CREATE_MEME_START, 
    CREATE_MEME_SUCCESS, 
    CREATE_MEME_FAILURE, 
} from "./constants";

import store from "../index";

// Acciones asíncronas
// Fetch
export const fetchMemesStart = () => ({
    type: FETCH_MEMES_START
})

export const fetchMemesSuccess = (memes) => ({
    type: FETCH_MEMES_SUCCESS,
    payload: memes
})

export const fetchMemesFailure = (errorMessage) => ({
    type: FETCH_MEMES_FAILURE,
    payload: errorMessage
})

// Delete
export const deleteMemeStart = () => ({
    type: DELETE_MEME_START,
})

export const deleteMemeSuccess = (id) => ({
    type: DELETE_MEME_SUCCESS,
    payload: id
})

export const deleteMemeFailure = (errorMessage) => ({
    type: DELETE_MEME_FAILURE,
    payload: errorMessage
})

// Create
export const createMemeStart = () => ({
    type: CREATE_MEME_START,
})

export const createMemeSuccess = (meme) => ({
    type: CREATE_MEME_SUCCESS,
    payload: meme
})

export const createMemeFailure = (errorMessage) => ({
    type: CREATE_MEME_FAILURE,
    payload: errorMessage
})


