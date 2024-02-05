// 1. make a function name as sortMaker(), which will take an array as input.
// 2. access the elements of the input array .
// 3. if any element is negative return "invalid input".
// 4. if elements are equal, then return 'equal'.
// 5. if elements are not equal, then return in descending order.

function sortMaker(arr){
    // access the element of the input array.
    const[a,b] = arr;
// 3. if any element is negative return "invalid input".

    if(a<0 || b<0){
        return 'Invalid Input';
    }
// 4. if elements are equal, then return 'equal'.
  if(a == b){
    return 'equal';
  }
// 5. if elements are not equal, then return in descending order.
if(a>b){
    return [a, b];
}
else{
    return [b, a];
}
}

console.log(sortMaker([4,4]));