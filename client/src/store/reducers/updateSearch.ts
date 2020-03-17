export default (state, payload) => {
  if (payload || payload === "") {
    return payload;
  } else {
    return state;
  }
};
