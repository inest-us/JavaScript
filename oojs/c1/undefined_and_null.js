var somevar;
console.log(somevar); // undefined
console.log(typeof somevar); // undefined

var somevar = null
console.log(somevar) //null
console.log(typeof somevar) //object

var i = 1 + undefined; 
console.log(i); //NaN

var i = 1 + null; 
console.log(i); //1

//Conversion to a number:
console.log(1*undefined) //NaN
console.log(1*null) //0

//Conversion to a boolean:
console.log(!undefined) //true
console.log(!!undefined) //false
console.log(!null) //true
console.log(!!null) //false

//Conversion to a string:
console.log("" + null) //"null"
console.log("" + undefined) //"undefined"

