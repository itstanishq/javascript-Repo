// In this we talk about local and global scope 

// var c = 300 ;    // in var case this will show diff value
  let a = 300 ;     // global scope
if(true){
    let a = 10;
    const b = 20;
   //  console.log("Inner :" , a);   // block scope
} 
// console.log(a);    // show error
// console.log(b);    // show error
// console.log(c);    // do not show any kind of error 


function one (){
  const username = "Tani";
  function two() {
    const website = "insta"
    console.log(username);
  }
  // console.log(website);
  // two();
}
// one();

if (true){
  const username = "tanishq";
  if (username == "tanishq"){
    const website = "insta" 
   // console.log(username + website);
  }
  //console.log(website);

}
// console.log(username);


// .. . . . .. ...........................
console.log(addOne(5));
function addOne(num){
  return num + 1
} // this is called normal function

addTwo(4);   // this will thrw error
const addTwo = function(num){
  return num + 2
}   // this is called expression. vairable can hold any value 
  