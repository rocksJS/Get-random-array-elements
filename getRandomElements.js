// arr - array with elems
// amount - amount of elements

function arrayRandomElement(arr, amount = 1) {
  let arrayOfResult = new Set();

  while (arrayOfResult.size < amount) {
    arrayOfResult.add(arr[Math.floor(Math.random() * arr.length)]);
  }

  return Array.from(arrayOfResult);
}
