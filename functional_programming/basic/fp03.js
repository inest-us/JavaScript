const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOdds(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(getOdds(arr)); //[1, 3, 5, 7, 9]

const getOdds2 = arr => arr.filter(num => num % 2 !== 0);
console.log(getOdds2(arr)); //[1, 3, 5, 7, 9]
