// forEach never returns the actual value it print the value but never return the value if it stored in any kind of variable .. 

const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.filter( (num)=> {
//     return num>4 ;          // if we use scope then we have to use return 
// }
// );

// console.log(newNums); 

// if we use foreach in place of filter then we have to use logic in it.

const newNum = [];
nums.forEach( (num) => {
     if (num>4) {                   //this case is also okey becouse it uses simple optimzation
        newNum.push(num);                
     }
});

// console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => {
    return bk.genre === 'History';
  })
   userBooks = books.filter( (bk)=> {
    return bk.publish >= 2000 ;
   })

  console.log(userBooks);





