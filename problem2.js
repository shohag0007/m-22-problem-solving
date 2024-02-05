// we will write a function named 'matchFinder' which will take two input.
// will try to match between the two strings.
// return true/false based on the match.
// return error message if the parameters are not string.

function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "please specify string as input parameter";
    }
    const result = string1.includes(string2);
    return result;
}

console.log(11,matchFinder('John Doe', 'ohn'));
console.log(12,matchFinder('JavaScript', 'Code'));
console.log(13,matchFinder('Peter Parker', 'Pen'));
console.log(14,matchFinder('Peter Parker', 'pet'));
console.log(14,matchFinder('Peter Parker', 12));



