const accountId = 123322;
let accountEmail = "tanishqxyz@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";

//accountId = "23221";

/* console.log(accountId);  This is not allowed due to the const is used for constant value */

accountEmail = "tanishq8562@gmail.com";
accountPassword = "1256";
accountCity = "london";

console.table([accountId,accountEmail,accountPassword,accountCity]);

/*
   prefere not to use var becouse of issue in block scope and functional 
   scope  ..
*/