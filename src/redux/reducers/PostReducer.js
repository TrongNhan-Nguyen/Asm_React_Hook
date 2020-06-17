/* eslint-disable prettier/prettier */
const initialState = {
  post: null,
  category: 'Science',
  isNotify: false,
};
export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POST':
      const detailPost = action.payload;
      return {
        ...state,
        post: detailPost,
      };
    case 'CHANGE_CATEGORY':
      const newCategory = action.payload;
      return {...state, category: newCategory};
    case 'TOGGLE_NOTIFY':
      return {...state, isNotify: !state.isNotify};
    default:
      return state;
  }
};
