// In this we talk about local and global scope 

// var c = 300 ;    // in var case this will show diff value
  let a = 300 ;     // global scope
if(true){
    let a = 10;
    const b = 20;
    console.log("Inner :" , a);   // block scope
} 
 console.log(a);    // show error
// console.log(b);    // show error
// console.log(c);    // do not show any kind of error 