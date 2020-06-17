/* eslint-disable prettier/prettier */
const initialState = {
  user: null,
  isLoading: false,
  isSigned: false,
  isAdmin: false,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_SIGN_IN':
      return {
        user: null,
        isLoading: true,
        isSigned: false,
        isAdmin: false,
      };
    case 'SIGN_IN':
      const newUser = action.payload;
      const checkAdmin = newUser.email === 'nhan@gmail.com' ? true : false;
      return {
        user: newUser,
        isLoading: false,
        isSigned: true,
        isAdmin: checkAdmin,
      };
    case 'SIGN_OUT':
      return {
        user: null,
        isLoading: false,
        isSigned: false,
        isAdmin: false,
      };

    default:
      return state;
  }
};
export default UserReducer;
