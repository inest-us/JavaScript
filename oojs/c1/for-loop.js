var res = '\n';
for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        res += '* ';
    }
    res+= '\n';
}

console.log(res);

//Here's another example that uses nested loops and a modulus operation in order to draw a little snowflake-like result.
var res = '\n', i, j;
for(i = 1; i <= 7; i++) {
    for(j = 1; j <= 15; j++) {
        res += (i * j) % 8 ? ' ' : '*';
    }
    res+= '\n';
}

console.log(res);