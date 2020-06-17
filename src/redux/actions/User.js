/* eslint-disable prettier/prettier */
export const startSignIn = () => {
  return {type: 'START_SIGN_IN'};
};
export const signIn = (user) => {
  return {
    type: 'SIGN_IN',
    payload: user,
  };
};
export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};
