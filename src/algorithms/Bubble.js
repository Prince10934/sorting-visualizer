const Bubble = (arr) => {
  const newArr = [];
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 1; j < len - i; j++) {
      if (arr[j - 1] > arr[j]) {
        newArr.push({
          a: j - 1,
          b: j,
          last: false,
        });
        let tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
      }
      if (j + 1 === len - i) {
        newArr.push({
          a: 0,
          b: j,
          last: true,
        });
      }
    }
    if (i + 1 === len - 1) {
      newArr.push({
        a: 0,
        b: 0,
        last: true,
      });
    }
  }
  return newArr;
};
export default Bubble;
