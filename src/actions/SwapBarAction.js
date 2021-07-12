const SwapBarAction = (obj, prev) => (dispatch, getState) => {
  const which = getState().RADIO.algorithm;
  const height = getState().ARRAY.height;
  const arr = [...getState().ARRAY.arr];
  if (which === "merge") {
    arr[obj.id] = obj.value;
    dispatch({
      type: "ARRAY",
      payload: {
        height,
        arr,
      },
    });
  } else {
    if (prev !== null && !prev.last) {
      let index_a = arr[prev.a].key;
      let value_a = arr[prev.a].props.style.height;
      let index_b = arr[prev.b].key;
      let value_b = arr[prev.b].props.style.height;
      arr[prev.a] = (
        <li
          className="bar"
          key={index_a}
          style={{
            height: value_a,
            backgroundColor: "white",
          }}
        ></li>
      );
      arr[prev.b] = (
        <li
          className="bar"
          key={index_b}
          style={{
            height: value_b,
            backgroundColor: "white",
          }}
        ></li>
      );
    }
    let index_a = arr[obj.a].key;
    let value_a = arr[obj.a].props.style.height;
    let index_b = arr[obj.b].key;
    let value_b = arr[obj.b].props.style.height;
    if (obj.last) {
      arr[obj.b] = (
        <li
          className="bar"
          key={index_b}
          style={{
            height: value_b,
            backgroundColor: "blue",
          }}
        ></li>
      );
    } else {
      arr[obj.a] = (
        <li
          className="bar"
          key={index_a}
          style={{
            height: value_a,
            backgroundColor: "red",
          }}
        ></li>
      );
      arr[obj.b] = (
        <li
          className="bar"
          key={index_b}
          style={{
            height: value_b,
            backgroundColor: "red",
          }}
        ></li>
      );
      let tmp = arr[obj.a];
      arr[obj.a] = arr[obj.b];
      arr[obj.b] = tmp;
    }
    dispatch({
      type: "ARRAY",
      payload: {
        height,
        arr,
      },
    });
  }
};
export default SwapBarAction;
