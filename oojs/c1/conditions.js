var result = '';

//A better way to check if a variable is defined is to use typeof.
console.log(typeof somevar); //undefined

if (typeof somevar !== "undefined"){
    result = 'yes';
}

console.log(result === ''); //true

//f a variable is defined and initialized with any value other than undefined, 
//its type returned by typeof is no longer "undefined".
var somevar = 123;
if (typeof somevar !== "undefined") {
    result = 'yes';
}

console.log(result); //yes