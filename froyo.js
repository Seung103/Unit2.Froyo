// 1. look at every flavor and count each flavor in the array
// 2. 

/**
* @param {string[]} flavors
*/

function countFlavors(flavors) {
const counts = {};
for (const flavor of flavors) {
    if (flavor in counts) {
        counts[flavor] += 1;
    } else {
        counts[flavor] = 1;
    }
}
return counts;
}

const userFlavors = prompt(
    "Enter list of froyo flavors","vanilla,vanilla,vanilla,strawberry,coffee,coffee");

    