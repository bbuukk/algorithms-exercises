/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if(nums.length < 2) {
    return nums
  }

  const middle = Math.floor(nums.length / 2)

  const left = nums.slice(0, middle)
  const right = nums.slice(middle)

  const sortLeft = mergeSort(left)
  const sortRight = mergeSort(right)
  
  return merge(sortLeft, sortRight) 
};

function merge(a,b){
  const result = []

  while(a.length > 0 && b.length > 0) {
    if(a[0] < b[0]) {
      result.push(a.shift())
    }else {
      result.push(b.shift())
    }
  }

  return result.concat(a, b);
}

// unit tests
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
