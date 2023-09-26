// there are two kinds of memory

//1 heap -------- refrence value
//2 stack---------primitive value

let theName = "Tanishq";
let anotherName = theName;
anotherName = "Vaishnavi";
console.log(theName);
console.log(anotherName);

let userOne = {
    email : "xyz@gmail.com",
    upi : "xyz@ybl"
}
let userTwo = userOne ; 

userTwo.email = "Tani@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);