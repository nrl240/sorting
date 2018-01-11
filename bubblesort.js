function bubbleSort(array) {
  debugger;
  /* your code here */
  var sorted = false;
  // recursive case
  for (var i = 0; i < array.length; i++) {
  	var changedArray = array.splice(i, 2);
  	var remainingArray = array.slice(i);
  	var finalArray = swapFunc(changedArray).concat(remainingArray);
  	array = finalArray;
  }

  // base case
  if (sorted) {
  	return array;
  } 

}

function swapFunc([num1, num2]) {

	if (num1 > num2) {
		return [num2, num1];
	} else {
		return [num1, num2];
	}
}

console.log(bubbleSort([5, 7, 2]));