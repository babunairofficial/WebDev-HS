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

//Assignment #5
let user = {
    name: "sachin",
    age: 19
}

function userDetails(user){
    console.log("Hi "+user.name+", your age is "+user.age);
}

userDetails(user)

//Assignment #6
let person = {
    name: "riya",
    age: "35",
    gender: "female"
}
function printDetails(person){
    if(person.gender == "male"){
        console.log("Hi Mr "+person.name+", your age is "+person.age);
    }
    else if(person.gender == "female"){
        console.log("Hi Mrs "+person.name+", your age is "+person.age);
    }
    else{
        console.log("Hi Others "+person.name+", your age is "+person.age);
    }
}
printDetails(person);

//Assignment #7
let voter = {
    name: "ramesh",
    age: "24"
}
function vote(voter){
    if(voter.age >= 18){
        console.log(voter.name+" can vote.");
    }
    else{
        console.log(voter.name+" cannot vote.");
    }
}
vote(voter);