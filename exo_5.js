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

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Nous allons vérifier que nous pouvons obtenir, grâce aux nombres du ci-dessus, le nombre (k) que vous choisirez. Quel nombre (k) vous ferait plaisir ? `, (k) => {
    console.log(sum_5(array, k));
    readline.close()
  })
};


const sum_5 = (arr, k) => {
  let imax = arr.length - 1
  let mid = k/2
  let cursor = 0
  let gap
  let hash_gap = {}
  for (let cursor = 0 ; cursor <= imax ; cursor++) {
    gap = Math.abs(arr[cursor] - mid)
    if (hash_gap[gap])
      return true
    else
      hash_gap[gap] = true
  }
  return false
}
