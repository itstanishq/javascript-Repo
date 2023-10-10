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