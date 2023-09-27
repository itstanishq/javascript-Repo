// stack and heap

//stack -- primitive value
//heap -- refrence value

let myname = "tanishq";
let anotherString = myname ;
anotherString = "vaishnavi";

//console.log(myname);
//console.log(anotherString);

let user = {
    email :"xyz@gmail.com",
    upi :"xyz@ybl"
}
let user2 = user ;
user2.email = "vaish0123@gmail.com";

console.log(user.email);
console.log(user2.email);

let iphone = {
    camera : "13mp",
    price : "1000000",
    color : "red"
}
console.log(iphone.camera.toUpperCase());
