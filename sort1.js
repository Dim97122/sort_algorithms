let fs = require('fs');

//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    console.log(data);//Le contenu du fichier est présent dans data
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

const bubbles = (data) => {
  let counter = 0;
  for (var i = 1; i < data.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (data[j] > data[j+1]) {
        [data[j+1], data[j]] = [data[j], data[j+1]];
      }
      counter++;
    }
  }
  return `Tri à bulle : Le tableau classé => ${data}. Total comparaisons : ${counter}`;
}

const insert = (data) => {
  let counter = 0;
  for (let i = 1; i < data.length; i++) {
    let key = data[i];
    let j = i - 1;
    while (j >= 0 && data[j] > key) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = key;
    counter++;
  }
  return `Tri à insertion : Le tableau classé => ${data}. Total comparaisons : ${counter}`;
}

const select = (data) => {
  for (let i = 0; i < data.length; i++) {
    let counter = 0;
    let min = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[min] > data[j]) {
        min = j;
      }
      counter++;
    }
    if (min !== i) {
      let tmp = data[i];
      data[i] = data[min];
      data[min] = tmp;
    }
    return `Tri à sélection : Le tableau classé => ${data}. Total comparaisons : ${counter}`;
  }
}

const quick = (data) => {

}



const multipleSorting = (data) => {
  console.log(bubbles(data));
  console.log(insert(data));
  console.log(select(data));
  // console.log(quick(data));
}
