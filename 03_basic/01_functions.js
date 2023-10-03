

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

// commet here. 