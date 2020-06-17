/* eslint-disable prettier/prettier */
export const getPost = (post) => {
  return {type: 'GET_POST', payload: post};
};
export const changeCategory = (category) => {
  return {type: 'CHANGE_CATEGORY', payload: category};
};
export const toggleNotify = () => {
  return {type: 'TOGGLE_NOTIFY'};
};
