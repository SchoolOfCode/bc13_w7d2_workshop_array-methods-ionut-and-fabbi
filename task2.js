let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
//let bListAnimals = animals.filter(animal => animal[0] == 'b')

let bListAnimals = animals.filter(
  function(animal) {
    return animal[0] == 'b'
  }
)