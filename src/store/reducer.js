import { LOGAR, DESLOGAR, LOADING, COMPLETE } from "./actions";

const initialState = {
    logado: false,
    isLoding: false
}

export default (state = initialState, action) => {
    switch (action.type) {
      case LOGAR:
        return {
          ...state, logado: true
        };
      case LOADING:
        return {
          ...state, isLoading: true
        };
      case COMPLETE:
        return {
          ...state, isLoading: false
        };
    case DESLOGAR:
        return {
          ...state, logado: false
        };
      default:
        return state;
    }
  };