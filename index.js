// 1 function will receive a parameter which will be number.
// 2 convert the number to cube.
// 3 return the result.
// 4 return error message if we get error data type instead o number.


function cubeNumber(number){
    // convert the number to cube.
    if(typeof number !== 'number'){
        return "Please provide a number. "
    }
    const result = Math.pow(number, 3);
    // return the result
    return result;
}

console.log(cubeNumber(2));
console.log(cubeNumber(3));
console.log(cubeNumber(5));
console.log(cubeNumber('hello'));
