import axiosInstance from "../utils/axios";

export const LOGAR = "LOGAR";
export const DESLOGAR = "DESLOGAR"
export const LOADING = "LOADING"
export const COMPLETE = "COMPLETE"



// Action creators
export const fetchDataRequest = () => ({
    type: "LOADING"
  });
  export const fetchDataCompleted = () => ({
    type: "COMPLETE"
  });
  
  export const loginDataSuccess = (data) => ({
    type: "LOGAR",
    payload: data
  });

  export const logoutDataSuccess = (data) => ({
    type: "DESLOGAR"
  });
  
  export const fetchDataFailure = (error) => ({
    type: "ERRO",
    payload: error
  });

export function efetuarLogin(email, password){
    
    return async (dispatch, getState) => {
        dispatch(fetchDataRequest());
        try {
          const response = await axiosInstance.post('/auth/login', {email, password});
          localStorage.setItem('token', response.data.token)
          dispatch(loginDataSuccess(response.data));
        } catch (error) {
          dispatch(fetchDataFailure(error.message));
        }
        dispatch(fetchDataCompleted());
    }
}

export function efetuarLoginComGoogle(gtoken){
    
  return async (dispatch, getState) => {
      dispatch(fetchDataRequest());
      try {
        const response = await axiosInstance.post('/auth/login/google', {gtoken});
        localStorage.setItem('token', response.data.token)
        dispatch(loginDataSuccess(response.data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
      dispatch(fetchDataCompleted());
  }
}
