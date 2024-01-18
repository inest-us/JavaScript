var containsDuplicates = (nums) => {
    const numsSet = new Set(nums);
    const isEqual = numsSet.size === nums.length;
    return !isEqual; 
}

console.log(containsDuplicates([1, 3, 4, 1, 2])); // true
console.log(containsDuplicates([1, 2, 3, 4, 5])); // false


console.log("---------------------------------------------------");

var containsDuplicates_V2 = (nums) => {
    const numsSet = new Set();
    for (const num of nums) {
        if (numsSet.has(num)) {
            return true;
        }
        numsSet.add(num);
    }
    return false;
}

console.log(containsDuplicates_V2([1, 3, 4, 1, 2])); // true
console.log(containsDuplicates_V2([1, 2, 3, 4, 5])); // false