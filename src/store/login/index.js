import { LOGIN_USER_ERROR, LOGIN_USER_INIT, LOGIN_USER_SUCCESS } from "./constants";
const initialStore = {
  // usuario
  data: {},
  error: null,
  success: null,
  loading: false,
};

export const loginReducer = (prevState = initialStore, action) => {
  switch (action.type) {
    case LOGIN_USER_INIT:
      return {...prevState,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {...prevState, 
        data: action.payload,
        error: false,
        success: true,
        loading: false,
      };
    case LOGIN_USER_ERROR:
      return {...prevState,
        error: action.payload,
        success: false,
        loading: false,
      };
    default:
      return prevState;
  }
};
