//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
let sortedArray1 = [];

console.log(nums1);

function minValue(array){
  let min;
  let out = [];
  while(array.length > 0){
    min = array[0];
        for(let i = 0; i<array.length; i++){
         if(array[i] < min ){
          min = array[i];
        }
      }
    out.push(min);
    array.splice(array.indexOf(min),1);
    }
  return out;
}
console.log(nums1);
console.log(minValue(nums1));
console.log(minValue(nums2));
console.log(minValue(nums3));



//Using one of the test arrays as the argument, call your function inside the console.log statement below.



console.log(/* your code here */);
