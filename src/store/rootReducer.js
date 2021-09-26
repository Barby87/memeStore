import { combineReducers } from "redux";
import { loginReducer } from "./login";
// import { productsReducer } from "./products";
// import { usersReducer } from "./users";

// RootReducer combina los reducers disponibles en el store
const rootReducer = combineReducers({
    // state.login.data
    login: loginReducer,
    // Para acceder a los datos del usuario --> state.users.data
    // users: usersReducer,
    // products: productsReducer,
})

export default rootReducer;