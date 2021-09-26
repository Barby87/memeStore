import { 
    createMemeFailure, 
    createMemeStart, 
    createMemeSuccess, 
    deleteMemeFailure, 
    deleteMemeStart, 
    deleteMemeSuccess, 
    fetchMemesFailure, 
    fetchMemesStart, 
    fetchMemesSuccess, 
} from "./actions";

// Fetch
export const fetchMemesStartThunk = () => {
    return async (dispatch, getState) => {
        // const {Memes} = getState();
        // if(Memes.data.length > 10) {
        //     return;
        // }
        dispatch(fetchMemesStart());
        try {
            const response = await fetch(`https://api.imgflip.com/get_memes`)
            // const response = await fetch('http://alpha-meme-maker.herokuapp.com/')
            const data = await response.json();
            dispatch(fetchMemesSuccess(data.data.memes));            
        } catch (error) {
            dispatch(fetchMemesFailure(error.message));
        }
    }
}

// Delete
export const deleteMemeStartThunk = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteMemeStart());
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/memes/${id}`, {
                method: 'DELETE'
            })
            const data = await response.json();
            console.log('data', data);
            // Se despacha la acción deleteMemeSuccess con el id para borrar del estado local el elemento que la api borró, una vez que tuvo éxito
            dispatch(deleteMemeSuccess(id))            
        } catch (error) {
            dispatch(deleteMemeFailure(error.message));
        }
    }
}

// Create
export const createMemeStartThunk = (meme) => {
    return async (dispatch) => {
        dispatch(createMemeStart());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/caption_image', { 
                method: 'POST', 
                body: JSON.stringify(meme),
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                }
            })
            const data = await response.json();
            console.log('data', data)
            dispatch(createMemeSuccess(meme));
        } catch (error) {
            dispatch(createMemeFailure(error.message));
        }
    }
}


