export default (state, payload) => {
  console.log(!payload)
  if (payload) {
    return payload;
  } else {
    return state;
  }
};
