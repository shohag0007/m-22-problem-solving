// 1. define a function named as "findAddress" which will take an object as input.
// 2. access the elements of the object.
// 3. from the string as given sample - "10,15A.Earth Perfect"
// 4. replace the missing property with _
// 5. return the string.

// 1. define a function named as "findAddress" which will take an object as input.

function findAddress(obj){
// 2. access the elements of the object and replace the missing property with _
    const street = obj.street || "_";
    const house = obj.house || "_";
    const society = obj.society || "_";

// 3. from the string as given sample - "10,15A.Earth Perfect"
    const str = street + "," + house + "," + society;

return str;
}

console.log({street:10,house:"15A",society:"Earth Perfect"});

