/* axios vs fetch */

//first way of fetch using .then() promise chains 
function titleMain() {
    fetch('https://fakestoreapi.com/products/1') //make GET request to the API
    //fetch a product
        .then(async (response) => {
            //returns a promise that resolves with the parsed JSON
            const json = await response.json();
            console.log(json.title.length); //log title length of product
        });
}

titleMain();

//second way of fetch method - preferred way
//most prefered because of being more readable and looks synchronous
async function main() {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const json = await response.json();
    console.log(json.title.length);
}

main();