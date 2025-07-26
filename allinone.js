// let users = [
//   { id: 1, name: "Atul" },
//   { id: 2, name: "Karan" }
// ];
// Output: ["Atul", "Karan"]

// let user =[
//     {id:1,name:"Atul"},
//     {id:2,name:"Karan"}
// ]
// let username=user.map((item,value)=>{
//      return item.name
// })
// console.log(username)

// ----------------q2------------
// let people = [
//   { fname: "Atul", lname: "Singh" },
//   { fname: "Karan", lname: "Sharma" }
// ];
// Output: ["Atul Singh", "Karan Sharma"]
// -------------solve------------
let people = [ 
    {fname:"Atul",lname:"Singh"},
    {fname:"Karan",lname:"Yadav"}
]
let  divnamecast=people.map((item,value)=>{
    return people.join("")
})
console.log(divnamecast)

// ---------------------q3-----------
// let scores = [85, 42, 77];
// Output: ["Pass", "Fail", "Pass"] (pass ≥ 50)

// ---------------------solve----------
// let scores = [85,42,77];
// let result=scores.map((item,value)=>{
//       if(45<=item){
//         return item="Pass ✅"
//       }
//       else{
//         return item="Fail"
//       }
// })
// console.log(result)

// -----------------q4----------

// let values = [true, false, true];
// Output: ["Yes", "No", "Yes"]

// --------------solve------------
let value = [true,false,true]
let yn=value.map((item,value)=>{
    if(item===true){
         return "Yes"
    }
    else{
         return "No"
    }
})
console.log(yn)