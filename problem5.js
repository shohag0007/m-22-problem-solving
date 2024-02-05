// make a function named as canPay()this will take two parameters.
// make sum all the elements of the array.
// if the sum is greater than second input parameter, return true.
// else return false.


// make a function named as canPay()this will take two parameters.



function canPay(changeArray, totalDue){
    if(changeArray.length ==0){
        return "your array is empty.";
    }
  
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++){
        const element = array[i];
        sum += element;

    }

  
    // if the sum is greater than second input parameter, return true.
     // else return false.

     if(sum>=totalDue){
        return true;
     }
  else{
    return false;
  }


}

console.log(canPay([1,2,5],10));