Implement the frequency(arr, options) function.

The function takes an array and calculates the frequency of each value of the array sorted naturally.

For example:

frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna']); //[["Anna", 2], ["Peter", 3], ["Rose", 1]]
frequency([1, 10, 12, 2, 1, 10, 2, 2]); //[[1, 2], [2, 3], [10, 2], [12, 1]]
Optionally, the function can take the sorting criteria. For example, to sort alphabetically:

function alphabeticalCompare(value1, value2) {
  if (String(value1) < String(value2)) {
    return -1;
  } else if (String(value1) > String(value2)) {
    return 1;
  } else {
    return 0;
  }
}

frequency([1, 10, 12, 2, 1, 10, 2, 2], {compareTo: alphabeticalCompare}); //[[1, 2], [10, 2], [12, 1], [2, 3]]
The comparison function also receives the frequencies of each value. For example, to sort by descending frequency:

function frequencyCompare(value1, value2, freq1, freq2) {
  return freq2 - freq1;
}

frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'], {compareTo: frequencyCompare}); //[["Peter", 3], ["Anna", 2], ["Rose", 1]]
Finally the function can receive the grouping criteria. For example:

function isEven(number) {
  return number % 2 === 0;
}

function parity(number) {
  return isEven(number) ? 'even' : 'odd';
}

frequency([1, 2, 3, 4, 5, 6, 7], {criteria: parity}); //[["even", 3], ["odd", 4]]
Obviously you can combine both:

function profession(person) {
  return person.profession;
}

var persons = [
  {name: 'Peter', profession: 'teacher'},
  {name: 'Michael', profession: 'teacher'},
  {name: 'Anna', profession: 'scientific'},
  {name: 'Rose', profession: 'scientific'},
  {name: 'Anna', profession: 'scientific'},
  {name: 'Anna', profession: 'politician'}
];

frequency(persons, {criteria: profession, compareTo: frequencyCompare}); //[["scientific", 3], ["teacher", 2], ["politician", 1]]
