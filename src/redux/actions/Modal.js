/* eslint-disable prettier/prettier */
export const showModal = () => {
  return {type: 'SHOW_MODAL'};
};
export const hideModal = () => {
  return {type: 'HIDE_MODAL'};
};
export const getKeyPost = (keyPost) => {
  return {type: 'GET_KEY_POST', payload: keyPost};
};
