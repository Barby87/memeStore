import { initialStateMemes } from "../initialState";
import { 
    FETCH_MEMES_FAILURE, 
    FETCH_MEMES_START, 
    FETCH_MEMES_SUCCESS, 
    DELETE_MEME_START, 
    DELETE_MEME_SUCCESS,
    DELETE_MEME_FAILURE, 
    CREATE_MEME_START, 
    CREATE_MEME_SUCCESS, 
    CREATE_MEME_FAILURE,
} from "./constants";

const memesReducer = ( state = initialStateMemes, action ) => {
    switch (action.type) {
        // Fetcg
        case FETCH_MEMES_START:
            return {
                ...state,
                isLoading: 'loading',
            };
        case FETCH_MEMES_SUCCESS:
            return {
                ...state,
                isLoading: 'succeeded',
                data: action.payload,
            };
        case FETCH_MEMES_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: 'failed',
                data: [],
            };
        // Delete
        case DELETE_MEME_START:
            return {
                ...state,
                isLoading: 'loading',
            };
        case DELETE_MEME_SUCCESS:
            return {
                ...state,
                isLoading: 'succeeded',
                data: state.data.filter((meme) =>  meme.id !== parseInt(action.payload)),
            };
        case DELETE_MEME_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: 'failed',
                data: [],
        };
        // Create
        case CREATE_MEME_START:
            return {
                ...state,
                isLoading: 'loading',
            };
        case CREATE_MEME_SUCCESS:
            return {
                ...state,
                isLoading: 'succeeded',
                // Guardando el nuevo elemento en el estado inicial
                data: [...state.data, action.payload]
            };
        case CREATE_MEME_FAILURE:
            return {
                ...state,
                isLoading: 'failed',
                data: []
            };
        default:
            return state;
    }
}

export default memesReducer;