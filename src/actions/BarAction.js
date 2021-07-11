const BarAction = () => (dispatch, getState) => {
  const len = getState().RANGE.length;
  const arr = Array(len)
    .fill(0)
    .map((value) => Math.floor(Math.random() * 500));
  dispatch({
    type: "ARRAY",
    payload: arr,
  });
};
export default BarAction;
