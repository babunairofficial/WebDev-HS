/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656163200000, price: 20, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656249600000, price: 30, category: 'Transportation', itemName: 'Uber' },
    { id: 4, timestamp: 1656336000000, price: 40, category: 'Entertainment', itemName: 'Movie' },
    { id: 5, timestamp: 1656422400000, price: 50, category: 'Transportation', itemName: 'Train ticket' },
    { id: 6, timestamp: 1656508800000, price: 60, category: 'Food', itemName: 'Groceries' },
  ];

function calculateTotalSpentByCategory(transactions) {
    //create an object
    const categoryTotals ={};

    for(tr of transactions){
        //object destructuring
        let {category, price} = tr;

        if(!categoryTotals[category]){
            categoryTotals[category] = 0;
        }
        //if category exists then:
        categoryTotals[category] += price;
        
    }

    //result
    const result = [];
    for(category in categoryTotals){
        result.push({category:category, totalSpent:categoryTotals[category]});
    }
    
    //return value
    return result;

}
    
const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;
  