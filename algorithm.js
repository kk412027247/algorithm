const array = [4,2,3,5,6,7,1,2,3,1,10,2,-1,1/2,100];

// 冒泡排序
const bubbleSort = (array) => {
  return array.reduce( pre => {
    return pre.reduce((_pre, _cur, _index, _arr)=>{
      if(_arr[_index] > _arr[_index +1]){
        [_arr[_index] , _arr[_index +1]] = [ _arr[_index +1], _arr[_index]]
      }
      return _arr;
    },[])
  },[...array])
};

console.log(bubbleSort(array));


// 选择排序
const selectionSort = array => {
  const _array = [...array];
  const length = _array.length;
  let minIndex = 0;
  for(let i = 0; i < length-1; i++){
    minIndex = i;
    for(let j = i+1 ; j < length; j++){
      if(_array[minIndex] > _array[j]){
        minIndex = j;
      }
    }
    [_array[i], _array[minIndex]] = [_array[minIndex], _array[i]];
  }

  return _array;
};

console.log(selectionSort(array));

