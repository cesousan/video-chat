// import { userConstants } from '../constants';

export const users = (state = {}, action) => {
  switch (action.type) {
    // case userConstants.GET_SELF_REQUEST:
    //   return {
    //     loading: true
    //   };
    // case userConstants.GET_SELF_SUCCESS:
    //   return {
    //     loading: false,
    //     user: action.user
    //   };
    // case userConstants.GET_SELF_FAILURE:
    //   return {
    //     loading: false,
    //     user: null,
    //     error: action.error
    //   };
    default:
      return state;
  }
}
