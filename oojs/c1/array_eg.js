/* 
In order to delete an element, you can use the delete operator. 
It doesn't actually remove the element, but sets its value to undefined. 
After the deletion, the length of the array does not change.
*/
var a = [1, 2, 3];
delete a[1];
console.log(a); //[1, undefined, 3]
console.log(a.length); //3
console.log(a[1]); //undefined

//An array can contain any type of values, including other arrays.
var a = [1, 'two', false, null, undefined];
console.log(a); //[1, "two", false, null, undefined]
a[5] = [1, 2, 3];
console.log(a); //[1, "two", false, null, undefined, [1, 2, 3]]

//Let's see an example where you have an array of two elements, each of them being an array.
var a = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(a); //[[1, 2, 3], [4, 5, 6]]

//The first element of the array is a[0] and it is an array itself.
console.log(a[0]); //[1, 2, 3]

//To access an element in the nested array, you refer to the element index in another set of square brackets.
console.log(a[0][0]); //1
console.log(a[1][2]); //6

//Note also that you can use the array notation to access individual characters inside a string.
var s = 'one';
console.log(s[0]); //"o"
console.log(s[1]); //"n"
console.log(s[2]); //"e"
