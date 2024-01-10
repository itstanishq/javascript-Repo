const Num = [1,2,3]

// const sum = Num.reduce(function(acc,currval){
//      console.log(`acc:${acc}:currval:${currval}`)
//      return acc+currval
// },0)

// const sum = Num.reduce((acc,currval)=>acc+currval,0);

// console.log(sum);

// lets make a simple situation which is addition of price of item in shopping cart by reduce methord .

const shoppingCart = [
    {
    CourseName : 'pyCourse',
    Price : 2000 
},
{
    CourseName : 'javaCourse',
    Price : 5000 
},
{
    CourseName : 'DataScienceCourse',
    Price : 20000 
}
]

const addedCartPrice = shoppingCart.reduce((acc,item)=>{
    return acc+item.Price
},0)

console.log(`The total cost is :- ${addedCartPrice}`);