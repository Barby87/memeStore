import { combineReducers } from "redux";
import { loginReducer } from "./login";
import memesReducer from "./memes/memeReducer";
// import { productsReducer } from "./products";
// import { usersReducer } from "./users";

// RootReducer combina los reducers disponibles en el store
const rootReducer = combineReducers({
    // state.login.data
    login: loginReducer,
    // Para acceder a los datos del usuario --> state.memes.data
    memes: memesReducer,
})

export default rootReducer;