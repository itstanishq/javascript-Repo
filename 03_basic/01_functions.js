

function SayMyName(){
console.log("t");
console.log("a");
console.log("n");
console.log("i");
}

//SayMyName();

// function AddTwoNumber (Number1,Number2){

//     console.log(Number1+Number2);

// };    // usual function


function AddTwoNumber (Number1,Number2){

    // let result = Number1+Number2;
    // return result ;

    return Number1+Number2;    //it will run through this also
};

const result = AddTwoNumber(3,6);

// console.log("the result is :",result);

function UserLoginMessage (username){
    if(!username){
        console.log("please enter the valid eantry");
        return;
    }
     return `${username} has just logged in ` // string interpolation is used
}
const userMess = UserLoginMessage() // the concept of rerturn value explained
 // console.log(userMess);

// Shoping cart example
function calcCartPrice (val1,val2,...num1){
    return num1
}
// console.log(calcCartPrice(200,300,400,4000,5000)); //200 containted by val1,300 contained by val2 .

let user = {
    username : "Tani",
    price : 199
}

function handleAnyObject(anyObject){
    console.log(`the username is ${anyObject.username} and the price is ${anyObject.price}.`);
}
// handleAnyObject(user);

// we can pass the object also here 

// handleAnyObject({
//     username : "shami",   // just write anyobject instead of user 
//     price :499
// })

// we can pass array also 

const myNewArray = [200,300,500];

function getArraySecondValue(getArray){
    return getArray[1];
}
console.log(getArraySecondValue([200,330,400,500]));


