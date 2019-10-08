const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
};

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']


var heroes = [
    { name: "Batman", franchise: "DC" },
    { name: "Ironman", franchise: "Marvel" },
    { name: "Thor", franchise: "Marvel" },
    { name: "Superman", franchise: "DC" }
];

var marvelHeroes = heroes.filter(function (hero) {
    return hero.franchise == "Marvel";
});

// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]

