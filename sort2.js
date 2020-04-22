let fs = require('fs');

//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    console.log(`Le fichier de base comprend les valeurs ${data}`);//Le contenu du fichier est présent dans data
    createArray(data);
});

const createArray = (data) => {
	var intArray = data.split(' ').map(Number);
	check(intArray);
};

const check = (array) => {
	for (i = 0; i < array.length; i++) {
		if (Number.isNaN(array[i])) {
			console.log(
				"Please enter only numbers in the list.txt file! NaN found at place:" +
					i
			);
		}
	}
	if (array == " ") {
		console.log("Please enter the list of numbers in the list.txt file");
	}
	multipleSorting(array);
};

const mergeSort = (array) => {
  //Check if array can be split
  if (array.length < 2) {
    return array;
  }
  //Get Middle index
  const middle = Math.floor(array.length / 2);
  //Split Array In Two Sides
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle, array.length);
  //Use recusion to continue splitting
  // console.log('split:', leftSide, rightSide);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

const merge = (left, right) => {
  //Create New Array
  const result = [];
  let counter = 0;
  //Check if left array and right array is empty
  while(left.length && right.length) {
    //Find lower value
    if(left[0] <= right[0]) {
      //Add left value
      result.push(left.shift());
    } else {
      //Add right value
      result.push(right.shift());
    }
  }
  //Merge left array
  while(left.length) result.push(left.shift());
  //Merge right array
  while(right.length) result.push(right.shift());
  //return result array
  // console.log('result:', result);
  return result;
}

const cocktail = (array) => {
  let counter = 0;
  let is_Sorted = true;
  while (is_Sorted) {
    for (let i = 0; i< array.length - 1; i++) {
     if (array[i] > array[i + 1]) {
       counter++;
       let temp = array[i];
       array[i] = array[i + 1];
       array[i+1] = temp;
       is_Sorted = true;
     }
    }
    if (!is_Sorted)
    break;

    is_Sorted = false;
    for (let j = array.length - 1; j >= 0; j--) {
      if (array[j-1] > array[j]) {
        counter++;
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        is_Sorted = true;
      }
    }
  }
  console.log(`${counter} comparaisons`);
  return array;
}


const multipleSorting = (data) => {
  console.log(mergeSort(data));
  console.log(cocktail(data));
}
