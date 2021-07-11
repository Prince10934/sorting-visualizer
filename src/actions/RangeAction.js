const RangeAction = (len) => (dispatch) => {
  dispatch({
    type: "ADD",
    payload: Number(len),
  });
};
export default RangeAction;
