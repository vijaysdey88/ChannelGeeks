//Practice arrays
var names =  new Array('vijay', 'prasad', 'tushar');
//console.log('Array access using bracket notations....', names);
//console.log("name['1'] - ", names['1']);
//console.log("name['01'] - ", names['01']);
names['gp'] = "gaurav";
//console.log("name['gp'] - ", names['gp']);
//console.log(names, 'length', names.length);


//console.log('Playing with length...len = ', names.length);
//console.log('Array keys', Object.keys(names));
names[6] = "rishi";
//console.log('names', names, names.length);
// names.length = 10;
// console.log('Increase length - ' + names);
// names.length = 3;
// console.log('Decrease length - ' + names, 'gp >', names['gp']);


// Array -> every
var isString = function(cn, index, array) {
	//console.log(index, ' -> ', array, this);
	return typeof cn === 'string';
}

console.log('is every element string - ', [1, '2'].every(isString));
//console.log('is every element string - ', names.every(isString));
//console.log('is every element string - ', names.every(isString, ['hi', 1]));

// Array -> filter
var persons = [ {'name' : 'vijay'}, {'weight':24}, {'name':'prasad'}];
var isPerson = function(element, index, array) {
	return 'name' in element;
};
console.log('All persosns using filter - ', persons.filter(isPerson));