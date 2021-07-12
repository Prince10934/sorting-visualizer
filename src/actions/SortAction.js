const SortAction = (which) => (dispatch, getState) => {
  const height = getState().ARRAY.height;
  const arr = getState().ARRAY.arr;
  dispatch({
    type: which,
    payload: {
      height: height,
      arr: arr,
    },
  });
};
export default SortAction;
