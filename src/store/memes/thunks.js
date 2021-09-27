import { 
    createMemeFailure, 
    createMemeStart, 
    createMemeSuccess, 
    // deleteMemeFailure, 
    // deleteMemeStart, 
    // deleteMemeSuccess, 
    fetchMemesFailure, 
    fetchMemesStart, 
    fetchMemesSuccess, 
} from "./actions";

// Fetch
export const fetchMemesStartThunk = () => {
    return async (dispatch, getState) => {
        // const {Memes} = getState();
        dispatch(fetchMemesStart());
        try {
            const response = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await response.json();
            dispatch(fetchMemesSuccess(data.data.memes));            
        } catch (error) {
            dispatch(fetchMemesFailure(error.message));
        }
    }
}

// Delete
// export const deleteMemeStartThunk = (id) => {
//     return async (dispatch, getState) => {
//         dispatch(deleteMemeStart());
//         try {
//             const response = await fetch(`https://api.imgflip.com/meme/${id}`, {
//                 method: 'DELETE'
//             })
//             const data = await response.json();
//             console.log('data', data);
//             // Se despacha la acción deleteMemeSuccess con el id para borrar del estado local el elemento que la api borró, una vez que tuvo éxito
//             dispatch(deleteMemeSuccess(id))            
//         } catch (error) {
//             dispatch(deleteMemeFailure(error.message));
//         }
//     }
// }

// Create
export const createMemeStartThunk = (params, meme) => {
    return async (dispatch) => {
        dispatch(createMemeStart());
        try {
            params["password"] = "E$XNPeA!u8Cd$cw";
            params["username"]= "BrbaraCceres";
            const bodyParams = Object.keys(params)
            .map((key) => {
              return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
            })
            .join("&");
            const response = await fetch('https://api.imgflip.com/caption_image', { 
                method: 'POST', 
                body: bodyParams,
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


