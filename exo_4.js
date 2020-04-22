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
  sum_2(array);
};

const sum_4 = (array) => {
  let buildings = 1;
  let counter = 0;
  let max = Math.max(...array);
  let exposedBuildings = array.slice(array.indexOf(max));

  for (var i = exposedBuildings.length - 2; 0 <= i; i--) {
    for (var j = exposedBuildings.length - 3; 0 <= j; j--) {
      counter++;
      if (exposedBuildings[i] < exposedBuildings[j]) {
        buildings++
      }
    }
  }
  console.log(`${counter} comparaisons. ${buildings} bâtiments`);
}
