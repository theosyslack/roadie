export default (state, payload) => {
  if (payload) {
    return payload;
  } else {
    return state;
  }
};
