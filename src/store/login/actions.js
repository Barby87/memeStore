import { LOGIN_USER_ERROR, LOGIN_USER_INIT, LOGIN_USER_SUCCESS } from "./constants";

export const userLogin = ({ username, password }, cb) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_INIT });

    const loginSuccess = (response) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
    };
    const loginFail = (error) => {
      dispatch({ type: LOGIN_USER_ERROR, payload: error });
    };
    
    try {
      fetch("https://api-mock-login.herokuapp.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((response)=>{
        return response.json()
      }).then((data)=>{
        if (data.jwt){
         // Guardando token en localStorage
          localStorage.jwt = data.jwt;
          loginSuccess(username);
          // Si la respuesta es exitosa se ejecuta el callback
          cb()
        }
        else{
          loginFail(data.error);
        }
      })
    } catch (error) {
      loginFail(error);
    }
  };
};
