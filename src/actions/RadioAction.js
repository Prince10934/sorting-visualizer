const RadioAction = (which) => (dispatch) => {
  dispatch({
    type: which,
  });
};
export default RadioAction;
