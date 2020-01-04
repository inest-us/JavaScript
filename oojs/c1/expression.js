var b = 5;
true || (b = 6); //true
console.log(b); //5

true && (b = 6);
console.log(b); //6

/*
  This example also shows another interesting behavior—
  if JavaScript encounters a non-boolean expression as an operand in a logical operation,
  the non-boolean is returned as a result.
*/
console.log(true || 'something'); //true

console.log(true && 'something'); //"something"
