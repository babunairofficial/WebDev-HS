// find the sum of two numbers

function sum(a, b){
    return a + b;
}

console.log(sum(2,3));

// find sum from 1 to a number

function total(n){
    let sumOfN = 0;
    for(let i = 1; i <= n; i++){
        sumOfN +=i;
    }
    return sumOfN
}

console.log(total(100));