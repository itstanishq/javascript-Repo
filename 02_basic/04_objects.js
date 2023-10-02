// In this we learn about how to declare object with constructers. ---\\
// const tinderUser = new Object();  //this is the singleton object
 const tinderUser = {};         // this is a object litrals

  tinderUser.id = "1233"
  tinderUser.name = "tani"
  tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    fullname : {
        UserFullName :{
            FirstName : "Tanishq",
            LastName : "Bhardwaj"
        }
    }
}
// console.log(regularUser.fullname.UserFullName.LastName);   // we can acces the objects in the objects.

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj4 = {5:"a",6:"b"};
// const obj3 = {obj1,obj2};  // this shows the problems same as array.
// const obj3 = Object.assign({},obj1,obj2,obj4); //proper syntax {}-this work as a target
// const obj3 = {...obj1,...obj2,...obj4}; // most use full spread operator.
//console.log(obj3);

// when values comes from database ...

const users = [
    {
        id : "1",
        email : "xyx@gmail.com"
    },
    {
        id : "2",
        email : "xyz@gmail.com"
    },
    {
        id : "3",
        email : "xyb@gmail.com"
    }
]
// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));   // the output datatype will be array.
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser));  // less used array in array
// console.log(tinderUser.hasOwnProperty("id"));  // property present or not.

 
// Destructuring ----

const course = {
    courseName : "taniJs",
    coursePrice : "999" ,
    courseInstructor :"Tanishq"
}

// console.log(course.courseInstructor);

// we can use another syntax
const {courseInstructor:Instructor} = course ; // we can also give short name
// console.log(courseInstructor);
// console.log(Instructor);

// json syntax
// {
//  "name" : "tani",
//  "section" : "4B",
// "course" : "B-Tech"
// }
/*
[
    {},
    {},
    {}
]
*/
