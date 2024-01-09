// for Each

const lang = ["hindi","english","tamil","french","German"];

lang.forEach( (val)=>{
 //   console.log(val);
} )

function printme(item){
    console.log(item);    
}

// lang.forEach(printme);     // we can also give refrence of a function in for each

lang.forEach( (item,index,arr) => {
   // console.log(item,index,arr);       // for each has all item index as well as arr
})

const myCoading = [
    {
          langName : "javascript",
          langExtension : "js"
    },

    {
        langName : "python",
        langExtension : "py"

    },

    {
        langName : "c ++",
        langExtension : "cpp"

    }
];

myCoading.forEach( (item)=> {
   console.log(`${item.langName} :- for this the extenstion is ${item.langExtension}`);
})

    // we can also do these complex work with for each .



