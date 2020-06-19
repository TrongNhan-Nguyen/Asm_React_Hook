/* eslint-disable prettier/prettier */
const initialState = {
  name: 'List Post',
};
const DraweReducer = (state = initialState, acttion) => {
  if (acttion.type === 'NAME_DRAWER') {
    const current = acttion.payload;
    return {
      name: current,
    };
  } else {
    return state;
  }
};
export default DraweReducer;
