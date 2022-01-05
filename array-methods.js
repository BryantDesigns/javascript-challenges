const MultiplyBy2 = (num) => {
    return num * 2;
};

const convertToString = (value, idx, arr) => {
    console.log({value, idx, arr});
    const num = MultiplyBy2(value);
    return num.toString();
}
// myMap
const firstArray = [1, 2, 3]

const myMap = (array, func) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    // 1. current value 
    const curVal = array[i];
    // 2. the current index: i
    newArray.push(func(curVal, i, array))
  }
  return newArray;
};

// myFilter
const myFilter = (callback, array) => {
  const filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === true) {
      filteredArray.push(array[i]);
    } 
  }
  return filteredArray;
}
myFilter((val) => val === 1, firstArray)
console.log(myFilter((val) => val === 1, firstArray));
// testing the filter method
const testArrayToFilter = [1, 2, 3]

// const resultsOfFilter = testArrayToFilter.filter(val => {
//   // this is true
//   return val === 1 || val === 2
// });
// console.log({resultsOfFilter});
//Reduce
const myReduce = (array, callback, initial) => {
  let indx = 0
  let acc = initial;
  if (!acc) {
    indx = 1;
    acc = array[0];
  }

  for (i = indx; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc
}

// const result = myReduce(firstArray, (acc, num) => acc + num)
//console.log(resuresult)
