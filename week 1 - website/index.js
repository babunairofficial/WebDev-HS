//Assignment #1
function sum(a,b){
    return a+b;
}

let assgn1 = sum(3,7);
console.log(assgn1);

//Assignment #2
function canVote(age){
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}

let assgn2 = canVote(19);
console.log(assgn2);

//Assignment #3
function check(n){
    if(n%2==0){
        console.log("even number");
    }
    else{
        console.log("odd number");
    }
}
check(53)

//Assignment #4
function sumOfNumbers(x){
    let sum = 0;
    for(i=1;i<=x;i++){
        sum=sum+i;
    }
    return sum;
}

console.log(sumOfNumbers(8));