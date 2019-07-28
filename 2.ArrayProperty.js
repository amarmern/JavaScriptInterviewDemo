//create a Array..
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);//2

//geting all array elemrnt
console.log(fruits); //['Apple', 'Banana']
// Acceess the Array.
console.log(fruits[0]);//['Apple']
//Access the last element
console.log(fruits[fruits.length - 1]); //['Banana']

//How to iterate over array and print index and item
fruits.forEach(function(item, index,array){
    console.log(index, item); //[0 'Apple', 1 'Banana']
})


//Add item to array in last
console.log(fruits.push('Orange')); //retutn lenght of the array
console.log(fruits);// return all array element ['Apple', 'Banana' ,'Orange'];

//Remove item form last in Array
console.log(fruits.pop()); // Orange
console.log(fruits); //['Apple', 'Banana'];

//Remove and get first element
console.log(fruits.shift()); //Apple
console.log(fruits);

//add element in start
console.log(fruits.unshift('Strawberry')); //2
console.log(fruits); //["Strawberry", "Banana"]

//find the imdex of item in Array
fruits.push('Mango');//["Strawberry", "Banana" ,"Mango"]

console.log(fruits.indexOf('Banana')); // 1 (pass element as a string)

//Remove an item by index position...
var pos = fruits.indexOf('Banana') //1
console.log(fruits.splice(pos,1)) // Banana

//Remove items from an index posotion
var vergetables = ['cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vergetables);
var pos = 1, n =2;

var removedItems = vergetables.splice(pos, n);
console.log(vergetables); // ["cabbage", "Carrot"]
console.log(removedItems); // ["Turnip", "Radish"]

//coppy an Array.
var shallowcopy = fruits.slice();
console.log(shallowcopy); // ["Strawberry", "Mango"]

//more example

var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years[2]); // 1970
console.log(years['2']); //1970
console.log(years[02]); // 1970
console.log(years['02'])// undefined

console.log(years['2'] != years['02']); // true

//Numerical properties

var fruits = [];
console.log(fruits);
fruits.push('banana', 'apple', 'peach');
console.log(fruits.length); // 3

fruits[5] = 'mango';
console.log(fruits) // ["banana", "apple", "peach", empty × 2, "mango"]
console.log(Object.keys(fruits)); //["0", "1", "2", "5"]
console.log(fruits.length); // 6

//increasing the length
fruits.length = 10;
console.log(fruits); //["banana", "apple", "peach", empty × 2, "mango", empty × 4]
console.log(fruits.length); // 10

//decreasing the length
fruits.length = 2;
console.log(Object.keys(fruits)); //["0", "1"]
console.log(fruits); // ["banana", "apple"]
console.log(fruits.length); // 2











