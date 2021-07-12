const TimeoutAction = (is) => (dispatch) => {
  dispatch({
    type: "change",
    payload: is,
  });
};
export default TimeoutAction;
