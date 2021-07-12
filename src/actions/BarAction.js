const BarAction = (state) => (dispatch, getState) => {
  if (state) {
    const len = getState().RANGE.length;
    const height = Array(len)
      .fill(0)
      .map((_) => {
        return Math.floor(Math.random() * 490 + 10);
      });
    const arr = height.map((value, index) => {
      return (
        <li
          className="bar"
          key={index}
          style={{
            height: value + "px",
          }}
        ></li>
      );
    });
    dispatch({
      type: "ARRAY",
      payload: { arr, height },
    });
  } else {
    dispatch({
      type: "ARRAY",
      payload: { arr: [], height: [] },
    });
  }
};
export default BarAction;
