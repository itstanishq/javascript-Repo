const user = {
    username : "tani",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "mani"
// user.welcomeMessage()

// console.log(this);

// function  siyaram(){
//     let username = "tani"
//     console.log(this.username);   // undefined 
// }
// siyaram();

// ==== Declration of arrow function ====. //\

// const coffie = ()=>{
//     let username = "tani"
//     console.log(this);  // this can run in arrow function 
// }

// coffie();

// ====== pure arrow function discussion ======./

// synatx of addition of arrow function

// const add = (num1,num2) => {
//     return num1 + num2 ; 

// }

// console.log(add(3,4));

// implicit return 

// const add = (num1,num2) => (num1 + num2) ; 

const add = (num1,num2) => ({username:"tani"}); 
console.log(add());



