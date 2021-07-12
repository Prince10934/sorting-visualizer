const Merge = (height, arr) =>
  (function (height, arr) {
    const newArr = [];
    const Merging = (start, mid, end) => {
      let lLen = mid - start + 1;
      let rLen = end - mid;
      let lArr = [],
        lHeight = [];
      let rArr = [],
        rHeight = [];
      let tmp = null;
      for (let i = 0; i < lLen; i++) {
        lHeight.push(height[start + i]);
        lArr.push(arr[start + i]);
      }
      for (let i = 0; i < rLen; i++) {
        rHeight.push(height[mid + 1 + i]);
        rArr.push(arr[mid + 1 + i]);
      }
      let i = 0,
        j = 0,
        k = start;
      while (i < lLen && j < rLen) {
        if (lHeight[i] < rHeight[j]) {
          height[k] = lHeight[i];
          arr[k] = lArr[i];
          const value = lArr[i].props.style.height;
          tmp = (
            <li
              className="bar"
              key={k}
              style={{
                height: value,
                backgroundColor: "blue",
              }}
            ></li>
          );
          newArr.push({
            id: k,
            value: tmp,
          });
          i++;
        } else {
          height[k] = rHeight[j];
          arr[k] = rArr[j];
          const value = rArr[j].props.style.height;
          tmp = (
            <li
              className="bar"
              key={k}
              style={{
                height: value,
                backgroundColor: "blue",
              }}
            ></li>
          );
          newArr.push({
            id: k,
            value: tmp,
          });
          j++;
        }
        k++;
      }
      while (i < lLen) {
        height[k] = lHeight[i];
        arr[k] = lArr[i];
        const value = lArr[i].props.style.height;
        tmp = (
          <li
            className="bar"
            key={k}
            style={{
              height: value,
              backgroundColor: "blue",
            }}
          ></li>
        );
        newArr.push({
          id: k,
          value: tmp,
        });
        i++;
        k++;
      }
      while (j < rLen) {
        height[k] = rHeight[j];
        arr[k] = rArr[j];
        const value = rArr[j].props.style.height;
        tmp = (
          <li
            className="bar"
            key={k}
            style={{
              height: value,
              backgroundColor: "blue",
            }}
          ></li>
        );
        newArr.push({
          id: k,
          value: tmp,
        });
        j++;
        k++;
      }
    };
    const MergeSort = (start, end) => {
      if (start < end) {
        let mid = Math.floor((start + end) / 2);
        MergeSort(start, mid);
        MergeSort(mid + 1, end);
        Merging(start, mid, end);
      }
    };
    MergeSort(0, height.length - 1);
    return newArr;
  })([...height], [...arr]);
export default Merge;
