// 1. look at every flavor and count each flavor in the array
// 2. 

/**
* @param {string[]} flavors
*/
//indepent study on looping and object but didn't get the same final result, for now I'm doing what Lester showed us in class but i do have solid understanding of basic functions and looping
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
  
  function countFlavorsReduce(flavors) {
    return flavors.reduce((counts, flavor) => {
      if (flavor in counts) {
        counts[flavor] += 1;
      } else {
        counts[flavor] = 1;
      }
      return counts;
    }, {});
  }
  
  const userFlavors = prompt(
    "Please enter a comma-separated list of froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  // I need to convert userFlavors from a string into an array of strings
  const userFlavorsArray = userFlavors.split(",");
  
  const counts = countFlavors(userFlavorsArray);
  console.log(counts);