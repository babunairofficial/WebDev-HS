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
    return sumOfN;
}

console.log(total(100));

//synchronous code
//codes are executed line by line and in the order it is written

function sum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans +=i;
    }
    return ans;
}

let ans1 = sum(100);
console.log(ans1);
let ans2 = sum(1000);
console.log(ans2);
let ans3 = sum(10000);
console.log(ans3);